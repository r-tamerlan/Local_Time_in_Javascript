var san, hh, min, ampm;
window.setInterval(function() {
    let tarix = new Date();

    if (tarix.getHours() >= 13) {
        hh = tarix.getHours() - 12;
        ampm = " PM"
    } else {
        hh = tarix.getHours();
        ampm = " AM"
    }

    if (tarix.getSeconds() >= 10) { san = tarix.getSeconds() } else {
        san = "0" + tarix.getSeconds()
    }
    if (tarix.getMinutes() >= 10) {
        min = tarix.getMinutes()
    } else {
        min = "0" + tarix.getMinutes()
    }

    let saat = hh + ":" + min + ":" + san + ampm;
    document.getElementById("screen").innerHTML = saat;
}, 10);