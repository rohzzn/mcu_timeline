const toggleBtn = document.getElementById("toggle-btn");
const timeline = document.getElementById("timeline");

toggleBtn.addEventListener("click", function() {
    timeline.classList.toggle("reverse");
    if (toggleBtn.textContent === "Switch to Chronological Order") {
        toggleBtn.textContent = "Switch to Release Order";
    } else {
        toggleBtn.textContent = "Switch to Chronological Order";
    }
});
