let currentIndex = 0;
const tasks = document.querySelectorAll(".task-box");

function updateTask() {
    tasks.forEach((task, index) => {
        task.classList.remove("active");
        if (index === currentIndex) {
            task.classList.add("active");
        }
    });
}

function nextTask() {
    currentIndex = (currentIndex + 1) % tasks.length;
    updateTask();
}

function prevTask() {
    currentIndex = (currentIndex - 1 + tasks.length) % tasks.length;
    updateTask();
}

function goToHomePage() {
window.location.href = "index.html"; // Knapp tilbake til hovedsiden
}
