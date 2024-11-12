const targetDate = new Date(2024, 11, 5, 0, 0, 0).getTime();
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24))/ (1000*60*60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000*60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);

    if(timeDifference < 0) {
        clearInterval(countdown);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent= "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent="00";
    }
}, 1000);

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

