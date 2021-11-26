const setPomoButton = document.querySelector("button#pomo");
const setBreakButton = document.querySelector("button#break");
const pomoLog = document.querySelector("#pomoLog");

let POMO_MINUTE = 25;
let BREAK_MINUTE = 5;
let LONG_BREAK_MINUTE = 15;

let POMO_COUNT = 0;
let BREAK_COUNT = 0;

let timer;

function setTimer(session, count, text) {

    const startTime = Date.now();
    const endTime = startTime + (session * 60 * 1000);

    // console.log(startTime + text + "start");
    // console.log(endTime + text + "end");   

    timer = setInterval(function() {
        const now = Date.now();
        const restTime = endTime-now;
        if (restTime >= 0) {   
            const restTimeMinute = restTime / (60*1000);
            const restTimeSecond = (restTime % (60*1000))/1000;
            const minutes = String(Math.floor(restTimeMinute)).padStart(2, "0");
            const seconds = String(Math.floor(restTimeSecond)).padStart(2, "0");
            clock.innerText=`${minutes}:${seconds}`;
        } else { 
            if(text == "pomo") {
                POMO_COUNT++;
                console.log((count + 1).toString() + " " + text + " clear!");
                clearInterval(timer);
                printPomo(count);
                alert("time to break :)");
                if (POMO_COUNT % 4 == 0) {
                    setLongBreak();
                } else {
                    setBreak();
                }               
            } else if(text == "break") {
                BREAK_COUNT++;
                console.log((count + 1).toString() + " " + text + " clear!");
                clearInterval(timer);
                if (BREAK_COUNT % 4 != 0) {
                    alert("time to start!");
                    setPomo();
                } else {
                    alert("Full Session Clear :) ");
                }       
                
            }
                  }
    }, 1000);
}
function printPomo(count) {
    const li = document.createElement("li");
    pomoLog.appendChild(li);
    const img = document.createElement("img");
    img.classList.add("icon");
    li.appendChild(img);    
    img.src = `img/pomodoro.svg`;
    const time = new Date();
    img.title = (count+1) + " Session End: " + String(time.getHours()).padStart(2, "0") + ":" + String(time.getMinutes()).padStart(2, "0") + ":" + String(time.getSeconds()).padStart(2, "0");
    console.log("Session End: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    
}
function setPomo() {
    clearInterval(timer);
    clearInterval(timerClock);
    setTimer(POMO_MINUTE, POMO_COUNT, "pomo");
}

function setBreak() {
    clearInterval(timer);
    clearInterval(timerClock);
    setTimer(BREAK_MINUTE, BREAK_COUNT, "break");
}

function setLongBreak() {
    clearInterval(timer);
    clearInterval(timerClock);
    setTimer(LONG_BREAK_MINUTE, BREAK_COUNT, "break");
}


setPomoButton.addEventListener("click", setPomo);
setBreakButton.addEventListener("click", setBreak);

    
