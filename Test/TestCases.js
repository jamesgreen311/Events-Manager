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
    console.log(title);
}
  
function testGetSubTitle() {
    let subtitle = getSubTitleById(testEvent);
    console.log(subtitle);
}

function testGetStart() {
    let start = getStartById(testEvent);
    console.log(start);
}

function testGetEnd() {
    let end = getEndById(testEvent);
    console.log(end);
}

function testGetLocation() {
    let location = getLocationById(testEvent);
    console.log(location);
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
    let contactName = getContactNameById(testEvent);
    console.log(contactName);
}

function testGetContactEmail() {
    let contactEmail = getContactEmailById(testEvent);
    console.log(contactEmail);
}

function testGetEventStatus() {
    let v = getStatusById(testEvent);
    console.log(getEventStatus());
}

function testAvailableSeats() {
    let c = getCountById(testEvent);
    let avail = getMaxById(testEvent) - c;
    console.log(avail);
}