function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
}



// List of background images
const backgrounds = [
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/background1.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/background2.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/background3.jpg"
];

// Function to change background
function changeBackground() {
    const body = document.body;
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}



