const data = connect().getSheetByName("Event");

/**
*
*
*/

DataMap = {
    eventId: "a2",
    firstName: "b2",
    lastName: "c2",
    email: "d2",
    phone: "e2",
    comments: "f2",
    count: "h2" // calculated
    }

function getCount() {
    return data.getRange(DataMap.count).getValue();
}