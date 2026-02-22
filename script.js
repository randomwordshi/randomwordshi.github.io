let count = 0;

const clickBtn = document.getElementById("clickBtn");
const counter = document.getElementById("counter");

clickBtn.addEventListener("click", () => {
    count++;
    counter.textContent = "Clicks: " + count;
});
