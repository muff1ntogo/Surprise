const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const secretLink = document.getElementById('secret-link'); // Get the secret link element

const currentYear = new Date().getFullYear();

const releasedate = new Date(`September 2 2024 10:00:00`);

// Update Countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = releasedate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    if (diff > 0) {
        days.innerHTML = d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;
    } else {
        days.innerHTML = '0';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        secretLink.style.display = 'block'; // Show the secret link when the countdown ends
    }
}

setInterval(updateCountdown, 1000);





