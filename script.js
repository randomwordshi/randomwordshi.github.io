let count = 0;

const clickBtn = document.getElementById("clickBtn");
const counter = document.getElementById("counter");
const themeToggle = document.getElementById("themeToggle");

clickBtn.addEventListener("click", () => {
    count++;
    counter.textContent = "Clicks: " + count;
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
