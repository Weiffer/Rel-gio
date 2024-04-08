let digitalElement = document.querySelector('.digital')
let secondsElement = document.querySelector('.p_s')
let minuteElement = document.querySelector('.p_m')
let hourElement = document.querySelector('.p_h')

function updateClock(){
    let now = new Date()
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    secondsElement.style.transform = `rotate(${6*second-90}deg)`;
    minuteElement.style.transform = `rotate(${6*minute-90}deg)`;
    hourElement.style.transform = `rotate(${(30*hour-90)+(0.5*minute)}deg)`;
};

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);