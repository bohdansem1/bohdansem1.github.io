// JavaScript to handle slider functionality
const slider = document.querySelector('.slider__container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = document.querySelector('.slider__slide').clientWidth;
const totalSlides = slider.children.length;

let slideIndex = 0; // Start with the central slide as the first slide
prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSliderPosition();
});

function updateSliderPosition() {
    if (slideIndex === 0 || slideIndex === 1){
      if (window.screen.width <= 450 ){
        slider.style.transform = `translateX(-${slideIndex * 357}px)`;
      } else {
        slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;}
      }
  else if (slideIndex === 2) {
    if (window.screen.width <= 450 ){
      slider.style.transform = `translateX(357px)`;
    }
    else{
    slider.style.transform = `translateX(1180px)`;}
  }
}
const feedbackCard1 = document.querySelector('.card1')
const feedbackCard2 = document.querySelector('.card2')
const feedbackCard3 = document.querySelector('.card3')

function opacitySlider(slideIndex){
    if (slideIndex === 0){
        feedbackCard1.classList.add('feedback_none')
        feedbackCard3.classList.add('feedback_none')
        feedbackCard2.classList.remove('feedback_none')
        feedbackCard2.classList.add('feedback_show')
    } else 
    if (slideIndex === 1){
        feedbackCard1.classList.add('feedback_none')
        feedbackCard2.classList.add('feedback_none')
        feedbackCard3.classList.remove('feedback_none')
        feedbackCard3.classList.add('feedback_show')
    }  else 
    if (slideIndex === 2){
        feedbackCard2.classList.add('feedback_none')
        feedbackCard3.classList.add('feedback_none')
        feedbackCard1.classList.remove('feedback_none')
        feedbackCard1.classList.add('feedback_show')
     }
}

opacitySlider(slideIndex);
  
nextBtn.addEventListener('click', () => {
    opacitySlider(slideIndex);
});

prevBtn.addEventListener('click', () => {
    opacitySlider(slideIndex);
});
