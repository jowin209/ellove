const countdown = document.getElementById('countdown-monitor');

const daysLeft = {
    "anniversary": 999,
    "birthday": 998
}


function countDownCheck() {
    if (daysLeft.anniversary > daysLeft.birthday) {
        return ["your birthday", daysLeft.birthday];
    }
    else {
        return ["our anniversary", daysLeft.anniversary];
    }
}


function setBanner() {
    const [event, days] = countDownCheck();

    countdown.textContent = 
    days === 0 
    ? `Today is ${event}!`
    : `${days} day${days !== 1 ? 's' : ''} left until ${event}!`;
}

setBanner();
