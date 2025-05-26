const backgrounds = [
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/header page.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/background2.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/background3.jpg"
];

// Function to change background
function changeBackground() {
    const body = document.body;
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
    body.style.backgroundSize = "cover"; 
    body.style.backgroundPosition = "center";
    body.style.backgroundAttachment = "fixed";
}

// Ensure a background image is set initially
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);

