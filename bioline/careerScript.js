const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;


nextBtn.addEventListener('click', () => {
  if (index < 3) { 
      index++;
      updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
      index--;
      updateSlider();
  }
});

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${index * 50}%)`;
  function updateSlider() {
    sliderContainer.scrollBy({
      left: slideWidth * index, 
      behavior: 'smooth', 
    });
  }
}
