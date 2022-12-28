let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const newYear = '1 Jan 2023';
function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = ((newYearDate - currentDate)/ 1000);
    const day = Math.floor((totalSeconds / 3600) / 24);
    days.innerHTML = timeZero(day);
    const hour = Math.floor(((totalSeconds / 3600) % 24 ));
    hours.innerHTML = timeZero(hour);
    const minute = Math.floor((totalSeconds / 60) % 60)
    minutes.innerHTML = timeZero(minute);
    const second = Math.floor(totalSeconds % 60);
    seconds.innerHTML = timeZero(second);
}
countDown();
setInterval(countDown, 1000);

function timeZero(t){
    return (t<10) ? `0${t}` : t;
}