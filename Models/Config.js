const config = connect().getSheetByName("Config");
const evtMaster = connect().getSheetByName("Event Master");
const evtDescription = connect().getSheetByName("Event Description");
const evtDetails = connect().getSheetByName("Event Details");

/*
Target Config Sheet retrieved as config in privateSettings.js
*/

ConfigDataMap = {
    status: "a2:a"
}
const validStatusList = config.getRange(ConfigDataMap.status);
const statusRule = SpreadsheetApp.newDataValidation().requireValueInRange(validStatusList, true).build();

EventMasterDataMap = {
    id: "a2:a",
    idCol: "1",
    eventStatus: "b2:b",
    eventStatusCol: "2",
    title: "c2:c",
    titleCol: "3",
    subtitle: "d2:d",
    subtitleCol: "4",
    start: "e2:e",
    startCol: "5",
    end: "f2:f",
    endCol: "6",
    location: "g2:g",
    locationCol: "7",
    max: "h2:h",
    maxCol: "8",
    contactName: "i2:i",
    contactNameCol: "9",
    contactEmail: "j2:j",
    contactEmailCol: "10",
    calendarStartCol: "12",
    calendarEndCol: "13",
    zoomLinkCol: "14",
    zoomMeetingIdCol: "15",
    zoomPasscodeCol: "16",
    all: "a2:p"
}

function getZoomLinkById(evt) {
    return getColumnByEventId(EventMasterDataMap.zoomLinkCol - 1, evt);
}

function getZoomMeetingIdById(evt) {
    return getColumnByEventId(EventMasterDataMap.zoomMeetingIdCol - 1, evt);
}

function getZoomPasscodeById(evt) {
    return getColumnByEventId(EventMasterDataMap.zoomPasscodeCol - 1, evt);
}

function getAllEventIds() {
    let all = evtMaster.getRange(EventMasterDataMap.id).getValues().filter(String);
    return all.map(r => r[0]);
}

function getCalendarStartById(evt) {
    return getColumnByEventId(EventMasterDataMap.calendarStartCol - 1, evt);
}

function getCalendarEndById(evt) {
    return getColumnByEventId(EventMasterDataMap.calendarEndCol - 1, evt);
}

function getStatusById(evt) {
    return getColumnByEventId(EventMasterDataMap.eventStatusCol - 1, evt);
}

function getTitleById(evt) {
    return getColumnByEventId(EventMasterDataMap.titleCol - 1, evt);
}

function getSubTitleById(evt) {
    return getColumnByEventId(EventMasterDataMap.subtitleCol - 1, evt);
}

function getStartById(evt) {
    return getColumnByEventId(EventMasterDataMap.startCol - 1, evt);
}

function getEndById(evt) {
    return getColumnByEventId(EventMasterDataMap.endCol - 1, evt);
}

function getLocationById(evt) {
    return getColumnByEventId(EventMasterDataMap.locationCol - 1, evt);
}

function getContactNameById(evt) {
    return getColumnByEventId(EventMasterDataMap.contactNameCol - 1, evt);
}

function getContactEmailById(evt) {
    return getColumnByEventId(EventMasterDataMap.contactEmailCol - 1, evt);
}

function getDescriptionById(evt) {
    let filteredData;
    let description;
    if (evt) {

        let data = evtDescription.getRange("a2:b" + evtDescription.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    }
    if (filteredData.length > 0) {
        description = filteredData.map(r => r[1]);
    }
    return description;
}

function getDetailsById(evt) {
    let filteredData;
    let details;
    if (evt) {

        let data = evtDetails.getRange("a2:b" + evtDetails.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    }
    if (filteredData.length > 0) {
        details = filteredData.map(r => r[1]);
    }
    return details;
}

function getMaxById(evt) {
    let filteredData;
    let max;
    if (evt) {

        let data = evtMaster.getRange(EventMasterDataMap.all + evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    }
    if (filteredData.length > 0) {
        max = filteredData[0][7];
    }
    return max;
}

function getColumnByEventId(col, evt) {
    let filteredData;
    let columnData;
    if (evt) {

        let data = evtMaster.getRange(EventMasterDataMap.all + evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    }
    if (filteredData.length > 0) {
        columnData = filteredData[0][col];
    }
    return columnData;
}

function addNewEvent(evt) {
    let row = [];
    row[0] = evt;
    try {
        evtMaster.appendRow(row);
        let newStatusCell = evtMaster.getRange(evtMaster.getLastRow(), EventMasterDataMap.eventStatusCol);
        newStatusCell.setDataValidation(statusRule).setValue("Planned");

    } catch (err) {
        console.error(`Could not add new event to Config tab, ${err}`);
        return false;
    }
    return true;
}

function createNewEvent(count = 1) {
    let r = true;
    for (c = 1; c <= count; c++) {
        try {
            r = addNewEvent(makeAnId());
        } catch (err) {
            r = false;
        }
    }
    return r;
}