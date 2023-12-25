// Function to toggle menu and hamburger icon
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.typed-output', {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed: 100, // Adjust typing speed as needed
    loop: true, // Set to true if you want the typing to loop
    showCursor: true, // Enable default cursor display
  });
});


// for image slide



let mainSliderSelector = '.main-slider',
    thumbSliderSelector = '.thumb-slider';

let mainSliderOptions = {
    loop: true,
    speed: 1500,
    parallax: true,
    loopAdditionalSlides: 5,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Set the delay in milliseconds (e.g., 3000ms = 3 seconds)
        disableOnInteraction: false, // Allow manual interaction to stop autoplay
    }
};

let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);


let thumbSliderOptions = {
    loop: true,
    speed: 1500,
    loopAdditionalSlides: 5,
    spaceBetween:5,
    slidesPerView:5,
    centeredSlides: true,
    touchRatio:0.2,
    slideToClickedSlide:true,
    direction:'vertical' 
};

let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

mainSlider.controller.control = thumbSlider;
thumbSlider.controller.control = mainSlider;


