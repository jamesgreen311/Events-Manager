let testEvent = '2F5CB12';

function testGetAllEventIds() {
    console.log(getAllEventIds());
}

function testGetOpeningById() {
    let openings = getOpeningById(testEvent);
}

function testGetCountById() {
    let count = getCountById(testEvent);
}

function testGetTitle() {
    let title = getTitleById(testEvent);
  //    console.log(getTitle());
  }
  
function testGetStart() {
    let v = getStart();
    console.log(getStart());
}

function testGetEnd() {
    let v = getEnd();
    console.log(getEnd());
}

function testGetLocation() {
    let v = getLocation();
    console.log(getLocation);
}

function testGetOpening() {
    let v = getOpening();
    console.log(getOpening());
}

function testGetDetails() {
    let v = getDetails();
    console.log(getDetails());
}

function testGetMax() {
    let v = getMax();
    console.log(getMax());
}

function testGetContactName() {
    let v = getContactName();
    console.log(getContactName());
}

function testGetContactEmail() {
    let v = getContactEmail();
    console.log(getContactEmail());
}

function testGetEventStatus() {
    let v = getEventStatus();
    console.log(getEventStatus());
}

function testAvailableSeats() {
    let c = getCountById(testEvent);
    let avail = getMaxById(testEvent) - c;
    console.log(avail);
}