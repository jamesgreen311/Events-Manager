function testCreateICS() {
    let cal = ics();
    cal.addEvent("January Program", "A panel discussion about portaiture painting", "Zoom", "1/9/2021 10:00 am", "1/9/2021 12:00 pm");
    let file = cal.build();
    console.log(file);
}