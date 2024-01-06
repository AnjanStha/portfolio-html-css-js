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



// Function to toggle themes


function toggleTheme() {
    var body = document.body;
    var desktopIcon = document.getElementById("theme-icon");
    var hamburgerIcon = document.querySelector("#hamburger-nav #ham-theme-icon");

    var desktopLogo = document.getElementsByClassName("logo-img");
    var hamlogo = document.getElementsByClassName("logo-img2");
    var github = document.getElementById("github_logo");
    var linkedin = document.getElementsByClassName("linkedin_logo");
    var arrow = document.getElementsByClassName("arrow");
    var tick = document.getElementsByClassName("experience_icon");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience_student");
    var email = document.getElementById("email_icon");
    
    
   

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        desktopIcon.src = "./assets/sun.png";
        hamburgerIcon.src = "./assets/sun.png";
        // Change logo to light mode
        // hamlogo.src ="./assets/logo_dark.png";
        github.src = "./assets/github_dark.png";
        education.src="./assets/education_white.png";
        experience.src="./assets/experience_light.png";
        email.src="./assets/email_light.png";

        for (var i = 0; i < desktopLogo.length; i++) {
            desktopLogo[i].src = "./assets/anjan_logo_dark.png";
        }   
        for (var i = 0; i < hamlogo.length; i++) {
            hamlogo[i].src = "./assets/logo_dark.png";
        }   

        for (var i = 0; i < linkedin.length; i++) {
            linkedin[i].src = "./assets/linkedin_light.png";
        }
        
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].src = "./assets/arrow_white.png";
        }

        for (var i = 0; i < tick.length; i++) {
            tick[i].src = "./assets/checkmark_dark.png";
        }
       
       
    } else {
        desktopIcon.src = "./assets/moon.png";
        hamburgerIcon.src = "./assets/moon.png";

        // hamlogo.src = "./assets/logo_light.png";
        github.src = "./assets/github.png";
        linkedin.src="./assets/linkedin.png";
        education.src="./assets/education.png";
        experience.src="./assets/experience.png";
        email.src="./assets/email.png";

        for (var i = 0; i < desktopLogo.length; i++) {
            desktopLogo[i].src = "./assets/anjan_logo_light.png";
        }   
        for (var i = 0; i < hamlogo.length; i++) {
            hamlogo[i].src = "./assets/logo_light.png";
        }   

        for (var i = 0; i < linkedin.length; i++) {
            linkedin[i].src = "./assets/linkedin.png";
        }
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].src = "./assets/arrow.png";
        }
        for (var i = 0; i < tick.length; i++) {
            tick[i].src = "./assets/checkmark.png";
        }
       
        // Change logo back to dark mode
       // desktopLogo.src = "./assets/anjan_logo.png";
     
    }
}


