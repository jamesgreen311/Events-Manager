/*
  Any representation of information such as a chart, diagram or table.

  The view means presentation of the model in a particular format.
*/
function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function render(f, opt) {
  let templ = HtmlService.createTemplateFromFile(f);
  if (opt) {
    let keys = Object.keys(opt);
    keys.forEach(function (k) {
      templ[k] = opt[k];
    })

  }
  return templ.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/* 
  Menu Options

*/
function onOpen() {
  let ui = SpreadsheetApp.getUi();

  ui.createMenu('MRAA Options')
  .addItem('Create a New Event', 'createNewEvent')
  .addItem('Create Multiple Events', 'showDialog')
  .addToUi()
}

function showDialog() {
  let html = HtmlService.createHtmlOutputFromFile("Pages/CreateEventDialog");
  SpreadsheetApp.getUi().showModalDialog(html, 'Create New Events');
}