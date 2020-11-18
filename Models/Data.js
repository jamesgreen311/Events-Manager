const eventData = connect().getSheetByName("Event");
const eventCounts = connect().getSheetByName("Event Registration Counts");

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
    countById: "i2:j"
}

CountMap = {
    count: "a2:b"
}

function getCountById(evt) {
    let filteredData;
    let count=0;
    if (evt) {
        let d = eventCounts.getRange(CountMap.count+eventCounts.getLastRow()).getValues();
        filteredData = d.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        count = filteredData[0][1];
    }

    return count>=0?count:0;
}
