function getRangeByName(n) {
    var a = wsData.getNamedRanges();
    var rc = "";
    for (var i in a) {
        if (a[i].getName() == n) {
            rc = a[i];
        }
    }

    return rc;
}

function sendNotification(data) {
    const regForm = "https://script.google.com/macros/s/AKfycbw9yov3sDA-4K0N4K5bdj_78HyM6idKyGUmz_Cv9oIHPpGKGzc/exec?v=reg&id=73CB67";
    const eventsPage = "https://metrorichmondart.org/meetings-critiques/";
    const cal = ics();
    cal.addEvent(data.title, data.subtitle, data.location, data.start, data.end);
    const attach = cal.build();
    const contactInfo = data.contactEmail?`For questions, please contact ${data.contactEmail} <br><br>`:"";
    const body = `Thank you for registering for the ${data.title} <br><br>
        ${contactInfo}
        If you need a reminder about event details, please revisit the <a href='${regForm}'>registration form</a> or the MRAA website 
        <a href='${eventsPage}'>Events page</a>`;
    const blob = Utilities.newBlob(attach, "text/calendar", "event.ics");
    //console.log(attach);
    MailApp.sendEmail({
        to: data.sendTo, 
        //bcc: supportEmail,
        replyTo: eventsReplyTo,
        subject: "MRAA Event Registration", 
        htmlBody: body,
        attachments: [
            blob
        ]
    });
}

function getCurrentYear() {
    y = new Date().getFullYear();
    return y;
}

function makeAnId() {
    return Math.floor(Math.random() * Math.floor(100000000)).toString(16).toUpperCase();
}
