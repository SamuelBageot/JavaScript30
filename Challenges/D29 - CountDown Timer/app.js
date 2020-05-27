const timeLeft = document.querySelector('.display__time-left');
const timerBtn = document.querySelectorAll('.timer__button');
const endTime = document.querySelector('.display__end-time');
const customTime = document.getElementsByName('minutes')[0];
let time, intervId, isRunning = false, newTime;


// FUNCTIONS

function start(time) {
    if (isRunning) {
        stop();
        start(time);
    } else {
        isRunning = true;
        countDown();
        intervId = setInterval(countDown, 1000);
        calcBackTime(time);
    }
}

function stop() {
    clearInterval(intervId);
    isRunning = false;
}

function countDown() {
    time < 1 && stop();
    const min = Math.floor(time / 60);
    let sec = time%60;
    sec < 10 ? sec = '0' + sec : sec;
    newTime = `${min}:${sec}`;
    timeLeft.innerHTML = newTime;
    time--;
}

function useCustomTime(e) {
    time = parseInt(e.target.value) * 60;
    start(time);
}

function useFactoryTime(e) {
    time = parseInt(e.target.getAttribute('data-time'));
    start(time);
}

function calcBackTime() {
    let date = new Date();
    date.setMinutes(date.getMinutes() + time/60);
    const hours = date.getHours();
    let min = date.getMinutes();
    min < 10 ? min = '0' + min : min;
    endTime.innerHTML = `Be Back At ${hours}:${min}`;
}


//  EVENT LISTENERS

timerBtn.forEach(btn => btn.addEventListener('click', useFactoryTime));

customTime.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        useCustomTime(e);
        customTime.value = null;
    }
})