const countdown = document.getElementById('countdown-monitor');
const baby = document.getElementsByClassName('baby');
const call_signs = document.querySelector('select.dropdown-select');
const questions = document.getElementsByClassName('question');

const daysLeft = {}

const specialEventDates = {
    "anniversary" : {
        "month": 11,
        "day": 2
    },
    "birthday": {
        "month": 7,
        "day": 12
    }
}

function countDownCheck() {
    // Check which date is closer or coming due
    if (daysLeft.anniversary > daysLeft.birthday) {
        return ["your birthday", daysLeft.birthday];
    }
    else {
        return ["our anniversary", daysLeft.anniversary];
    }
}

function setBanner() {
    const [event, days] = countDownCheck();

    // Set banner's text to either 'Today is our anniversary / your birthday!'
    // Or show many day/s left before our anniversary or her birthday (whichever is closer)
    countdown.innerText =
    days === 0
    ? `Today is ${event}!`
    : `${days} day${days !== 1 ? 's' : ''} left until ${event}!`;
}

function setDaysLeft() {
    // Set the number of days left for the upcoming special events
    for (const [event, date] of Object.entries(specialEventDates)) {
        let today = new Date();
        let upcoming = new Date(today.getFullYear(), date.month - 1, date.day);

        today.setHours(0, 0, 0, 0);
        upcoming.setHours(0, 0, 0, 0);

        // Check if the event has passed already (Program should not count backwards)
        if (upcoming < today) {
            upcoming.setFullYear(today.getFullYear() + 1);
        }

        let gap = upcoming - today;
        gap = Math.ceil(gap / (1000 * 60 * 60 * 24));

        // Assign the event to the days left (gap)
        daysLeft[event] = gap;
    }
}

setDaysLeft();
setBanner();

call_signs.addEventListener('change', (event) => {
    const newValue = event.target.value;

    // Update each instance of class baby to be updated to the value of call_signs
    for (b of baby) {
        b.innerText = newValue;
    }
})

for (const question of questions) {
    question.addEventListener('click', (event) => {
        const current = event.currentTarget;
        const qa_group = current.parentElement;
        const answer = qa_group.querySelector('.answer');

        // Toggle d-none class to unhide/hide the answer
        answer.classList.toggle('d-none');

        // Make the question connect with the answer by removing bottom radius
        question.classList.toggle('no-radius-bottom');

        // Used 'anti' for clarity of selecting not self
        for (const anti_question of questions) {
            if (anti_question !== current) {
                const anti_qa_group = anti_question.parentElement;
                const anti_answer = anti_qa_group.querySelector('.answer');

                anti_answer.classList.add('d-none');
            }
        }
    })
}
