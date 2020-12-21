/*
    Accepts input and converts it to commands for the model or view.

    The controller responds to the user input and performs interactions on the data model objects. 
    The controller receives the input, optionally validates it and then passes the input to the model.
*/
let Route = {};
Route.path = function(r, callback) {
  Route[r] = callback;
}

function doGet(e) {
    Route.path("done", showDone);

    let r;
    if (e.parameter.v === "reg") {
      r = showForm(e.parameter.id);
    } else if (Route[e.parameter.v]) {
      r = Route[e.parameter.v]();
    } else {
      // default to main page
      r = render(`${pageRoot}/${defaultPage}`);
    }
  
    return r;
}

function saveToSheet(data) {
    let today = new Date();
    data.push(today);
    eventData.appendRow(data);
    evtId = data[0];
    let eventInfo = {
      eventTitle: data[1],
      contactEmail: "",
      zoomLink: "",
      // sendTo: data[4],
      sendTo: "jamesgreen.311@gmail.com" // testing only
    }
    sendNotification(eventInfo);
    return true;
}

function showDone() {
  return render(`${pageRoot}/ThankYou`);
}

function showForm(id) {
  let options = {
    evt: id
  };

  return render(`${pageRoot}/Form`, options);
}