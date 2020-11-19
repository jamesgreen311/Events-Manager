const projectName = "Events Manager";
const publishMode = "test";
const ownerName = "James Green";
const pageRoot = "Pages";
const supportEmail = "tech@metrorichmondart.org";
const defaultPage = "EventList";
const targetSheetName = publishMode === "test"?"Dev-Test":"Event";

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
