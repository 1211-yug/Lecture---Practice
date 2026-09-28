let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;

let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

function start() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(runTimer, 1000);

}

function runTimer() {

    seconds++;

    if (seconds == 60) {

        seconds = 0;
        minutes++;

    }

    if (minutes == 60) {

        minutes = 0;
        hours++;

    }

    hour.innerHTML = String(hours).padStart(2, "0");
    minute.innerHTML = String(minutes).padStart(2, "0");
    second.innerHTML = String(seconds).padStart(2, "0");

}

function stop() {

    clearInterval(timer);
    timer = null;

}

function reset() {

    clearInterval(timer);

    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    hour.innerHTML = String(hours).padStart(2, "0");
    minute.innerHTML = String(minutes).padStart(2, "0");
    second.innerHTML = String(seconds).padStart(2, "0");

}
