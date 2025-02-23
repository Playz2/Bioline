let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot1");
let slideInterval; 


function showSlide(index) {
    if (index > slides.length) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector(".carousel1").style.transform = `translateX(-${currentIndex * 100}%)`;

    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");

    
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000); 
}


function nextSlide1() {
    showSlide(currentIndex + 1); 
}


function prevSlide1() {
    showSlide(currentIndex - 1); 
}


slideInterval = setInterval(nextSlide, 10000);


function setSlide(index) {
    showSlide(index);
}


showSlide(0);


function openQuiz(quizNumber) {
    alert("Opening Quiz " + quizNumber);
}
