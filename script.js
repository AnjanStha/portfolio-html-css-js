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




