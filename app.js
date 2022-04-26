(function() {
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

let setClock = function() {
    let day = new Date();

    //getting hours, minutes and seconds of actual time
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    //calculating Angles of every clock handle at specyfic time
    let hourAngle = (hh * 30) + (mm / 2);
    let minuterAngle = (mm * 6) + (ss / 10);
    let secondAngle = ss * 6;

    //setting handle positions
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuterAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
// Set clock on page Start
setClock();
// Updating time and clock handle positions every 1 second
setInterval(setClock, 1000);

})();