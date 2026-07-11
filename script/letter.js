const letterContent = document.querySelector(".letter-content");
const cinnamorollCards = document.querySelector(".why-cinnamoroll");

const unlockDate = new Date("2026-07-12T00:00:00");
const now = new Date();

if (now < unlockDate) {

    if (letterContent) {
        letterContent.innerHTML = "<p class='unavailable'>Come back here by July 12, 2026.</p>";
    }

    if (cinnamorollCards) {
        cinnamorollCards.innerHTML = "<p class='unavailable'>Learn more by July 12, 2026.</p>";
    }
}
