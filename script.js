const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    let secondsDeg = (seconds / 60) * 360 + 90;
    let minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    let hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
