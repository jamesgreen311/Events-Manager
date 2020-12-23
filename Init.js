const projectName = "Events Manager";
const publishMode = "test"; // not in use
const ownerName = "James Green";
const pageRoot = "Pages";
const supportEmail = "tech@metrorichmondart.org";
const eventsReplyTo = "mraa-events@metrorichmondart.org";
const defaultPage = "EventList";
const targetSheetName = publishMode === "test"?"Dev-Test":"Event"; // not in use

function init() {
  
}

function connect(id) {
    let conn;
    if (id) {
        conn = SpreadsheetApp.openById(id);
    } else {
        conn = SpreadsheetApp.getActiveSpreadsheet();
    }
    return conn;
}
