const config = connect().getSheetByName("Config");

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

function getTitle() {
    return config.getRange(ConfigDataMap.title).getValue();
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

function getEventStatus() {
    return config.getRange(ConfigDataMap.eventStatus).getValue();
}