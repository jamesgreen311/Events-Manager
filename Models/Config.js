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
    idCol: "a",
    eventStatus: "b2:b",
    eventStatusCol: "2",
    title: "c2:c",
    subtitle: "d2:d",
    start: "e2:e",
    end: "f2:f",
    location: "g2:g",
    max: "h2:h",
    contactName: "i2:i",
    contactEmail: "j2:j",
    all: "a2:j"
}

function getAllEventIds() {
    let all = evtMaster.getRange(EventMasterDataMap.id).getValues().filter(String);
    return all.map(r => r[0]);
}

function getTitleById(evt) {
    let filteredData;
    let title;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        title = filteredData[0][2];
    }
    return title;
}

function getSubTitleById(evt) {
    let filteredData;
    let subtitle;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        subtitle = filteredData[0][3];
    }
    return subtitle;
}

function getStartById(evt) {
    let filteredData;
    let start;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        start = filteredData[0][4];
    }
    return start;
}

function getEndById(evt) {
    let filteredData;
    let end;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        end = filteredData[0][5];
    }
    return end;
}

function getLocationById(evt) {
    let filteredData;
    let location;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        location = filteredData[0][6];
    }
    return location;
}

function getDescriptionById(evt) {
    let filteredData;
    let description;
    if (evt) {
        
        let data = evtDescription.getRange("a2:b"+evtDescription.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        description = filteredData.map(r => r[1]);
    }
    return description;
}

function getDetailsById(evt) {
    let filteredData;
    let details;
    if (evt) {
        
        let data = evtDetails.getRange("a2:b"+evtDetails.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        details = filteredData.map(r => r[1]);
    }
    return details;
}

function getMaxById(evt) {
    let filteredData;
    let max;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        max = filteredData[0][7];
    }
    return max;
}

function getContactNameById(evt) {
    let filteredData;
    let contactName;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        contactName = filteredData[0][8];
    }
    return contactName;
}

function getContactEmailById(evt) {
    let filteredData;
    let contactEmail;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        contactEmail = filteredData[0][9];
    }
    return contactEmail;
}

function getStatusById(evt) {
    let filteredData;
    let status;
    if (evt) {
        
        let data = evtMaster.getRange(EventMasterDataMap.all+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        status = filteredData[0][1];
    }
    return status;
}

function addNewEvent(evt) {
    let row = [];
    row[0] = evt;
    try {
        evtMaster.appendRow(row);
        let newStatusCell = evtMaster.getRange(evtMaster.getLastRow(), EventMasterDataMap.eventStatusCol);  
        newStatusCell.setDataValidation(statusRule).setValue("Planned");

    } catch(err) {
        console.error(`Could not add new event to Config tab, ${err}`);
        return false;
    }
    return true;
}

function createNewEvent() {
    let newId = makeAnId();
    return addNewEvent(newId);
  }