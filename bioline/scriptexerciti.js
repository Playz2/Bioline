
const video = document.getElementById("ske");
const videoToggle = document.getElementById("videoToggle");

videoToggle.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        videoToggle.textContent = "⏸ Pause";
    } else {
        video.pause();
        videoToggle.textContent = "▶ Play";
    }
});



function startTimer(duration) {
    let time = duration;
    const timerElement = document.getElementById("timer");

    const interval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds; 

        timerElement.textContent = `⏳ ${minutes}:${seconds}`;

        if (time <= 0) {
            clearInterval(interval);
            timerElement.textContent = "⏳ Time's up!";
        }
        time--;
    }, 1000);
}

startTimer(600);


function checkMatching1() {
    const answers = { "match1": "B", "match2": "A", "match3": "C", "match4": "D" };
    for (let key in answers) {
        let input = document.getElementById(key);
        if (input.value.toUpperCase() === answers[key]) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "lightcoral";
        }
    }
}
function checkMatching2() {
    const answers = { "match5": "B", "match6": "A", "match7": "C", "match8": "D" };
    for (let key in answers) {
        let input = document.getElementById(key);
        if (input.value.toUpperCase() === answers[key]) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "lightcoral";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const verificaButtons = document.querySelectorAll(".verifca");

    verificaButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const questionBlock = this.parentElement;
            const answers = questionBlock.querySelectorAll(".rasr");
            const correctAnswer = questionBlock.querySelector(".rasr[data-correct]");
            let selectedAnswer = questionBlock.querySelector(".rasr.selected");

            if (!selectedAnswer) return; 

            
            
            const correctLetter = correctAnswer.getAttribute("data-correct");  
            const selectedLetter = selectedAnswer.textContent.trim().charAt(0);
            

            if (selectedLetter === correctLetter) {
                selectedAnswer.classList.add("correct"); 
            } else {
                selectedAnswer.classList.add("incorrect");
                correctAnswer.classList.add("correct"); 
            }
        });
    });

    // Handle selection of answers
    const allAnswers = document.querySelectorAll(".rasr");
    allAnswers.forEach((answer) => {
        answer.addEventListener("click", function () {
            const questionBlock = this.closest(".cutie"); 
            const answers = questionBlock.querySelectorAll(".rasr");

            // Remove previous selection
            answers.forEach((ans) => ans.classList.remove("selected"));

            // Highlight selected answer
            this.classList.add("selected");
        });
    });
});
