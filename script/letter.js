const letterContent = document.querySelector(".letter-content");

const unlockDate = new Date("2026-07-12T00:00:00");
const now = new Date();

if (letterContent && now < unlockDate) {
    letterContent.innerHTML = "<p class='unavailable'>Come back here by July 12, 2026.</p>";
}
