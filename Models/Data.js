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
    countById: "h2:i"
}

function getCountById(evt) {
    let filteredData;
    let count;
    if (evt) {
        let d = data.getRange(DataMap.countById+data.getLastRow()).getValues();
        filteredData = d.filter(r => r[0] === evt);
    } 
    if (filteredData.length>0) {
        count = filteredData[0][1];
    }
    return count;
}
