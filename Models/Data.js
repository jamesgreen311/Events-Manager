const eventData = connect().getSheetByName("Event");

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

function getCountById(evt) {
    let filteredData;
    let count=0;
    if (evt) {
        let d = eventData.getRange(DataMap.countById+eventData.getLastRow()).getValues();
        filteredData = d.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        count = filteredData[0][1];
    }
    return count>=0?count:0;
}
