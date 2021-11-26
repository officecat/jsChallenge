const clock = document.querySelector("h2#clock");
const setClockButton = document.querySelector("button#setClock");

let timeGreeting = "";

function getClock() {
    clearInterval(timer);
    clearInterval(timerClock);
    clockWorking();
    timerClock = setInterval(clockWorking, 1000);  
    
}


function clockWorking() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
    if (hours < 12) {
        timeGreeting = "morning";
    } else if (hours >= 12 && hours < 18) {
        timeGreeting = "afternoon";
    } else if (hours >= 18 && hours < 21) {
        timeGreeting = "evening";
    } else if (hours >= 21) {
        timeGreeting = "night";
    }
}
clockWorking();
let timerClock = setInterval(clockWorking, 1000);

setClockButton.addEventListener("click", getClock);


