const config = connect().getSheetByName("Config");
const evtMaster = connect().getSheetByName("Event Master");
const evtRemarks = connect().getSheetByName("Event Description");
const evtDetails = connect().getSheetByName("Event Details");

/*
Target Config Sheet retrieved as config in privateSettings.js
*/

ConfigDataMap = {
  id: "a2:a",
  title: "b2",
  subtitle: "c2",
  start: "d2",
  end: "e2",
  location: "f2",
  opening: "g2:g",
  details: "h2:h",
  max: "i2",
  contactName: "j2",
  contactEmail: "k2",
  eventStatus: "l2"
}

EventMasterDataMap = {
    id: "a2:a",
    eventStatus: "b2:b",
    title: "c2:c",
    subtitle: "d2:d",
    start: "e2:e",
    end: "f2:f",
    location: "g2:g",
    max: "h2:h",
    contactName: "i2:i",
    contactEmail: "j2:j"
}

function getAllEventIds() {
    let all = evtMaster.getRange(EventMasterDataMap.id).getValues().filter(String);
    return all.map(r => r[0]);
}

function getTitleById(evt) {
    let filteredData;
    let title;
    if (evt) {
        
        let data = evtMaster.getRange("a2:j"+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        title = filteredData[0][2];
    }
    return title;
}

function getTitle() {
    return evtMaster.getRange(EventMasterDataMap.title).getValue();
}

function getSubTitleById(evt) {
    let filteredData;
    let subtitle;
    if (evt) {
        
        let data = evtMaster.getRange("a2:j"+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        subtitle = filteredData[0][3];
    }
    return subtitle;
}

function getSubTitle() {
    return config.getRange(ConfigDataMap.subtitle).getValue();
}

function getStart() {
    return config.getRange(ConfigDataMap.start).getDisplayValue();
}

function getEnd() {
    return config.getRange(ConfigDataMap.end).getDisplayValue();
}

function getLocationById(evt) {
    let filteredData;
    let location;
    if (evt) {
        
        let data = evtMaster.getRange("a2:j"+evtMaster.getLastRow()).getValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        location = filteredData[0][6];
    }
    return location;
}

function getLocation() {
    return config.getRange(ConfigDataMap.location).getValue();
}

function getOpening() {
    return config.getRange(ConfigDataMap.opening+config.getLastRow()).getValues().map(el => el[0]);
}

function getDetails() {
    return config.getRange(ConfigDataMap.details+config.getLastRow()).getValues().map(el => el[0]);
}

function getMax() {
    return config.getRange(ConfigDataMap.max).getValue();
}

function getContactName() {
    return config.getRange(ConfigDataMap.contactName).getValue();
}

function getContactEmail() {
    return config.getRange(ConfigDataMap.contactEmail).getValue();
}

function getStatusById(evt) {
    let filteredData;
    let status;
    if (evt) {
        
        let data = evtMaster.getRange("a2:j"+evtMaster.getLastRow()).getDisplayValues();
        filteredData = data.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        status = filteredData[0][1];
    }
    return status;
}

function getEventStatus() {
    return config.getRange(ConfigDataMap.eventStatus).getValue();
}