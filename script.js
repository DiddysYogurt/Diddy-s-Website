document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    // Open menu when clicking the hamburger button
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event from propagating to document
        menu.classList.toggle("active");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active"); // Closes menu when clicking elsewhere
        }
    });
});


// List of background images
const backgrounds = [
   // List of background images (Ensure all use raw GitHub links)
const backgrounds = [
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Cake%20Batter%20Lowfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Cheesecake%20No%20Sugar%20Added%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Choclate%20Classic%20Nonfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Cookies%20N%20Cream%20Nonfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Cotton%20Candy%20Nonfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Georgia%20Peach%20Nonfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Georgia%20peach.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Hawaiian%20Pineapple%20Nonfat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Island%20Banana%20NonFat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Mango%20Sunrise%20Non%20Dairy%20Sorbert.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Pomegranate%20Raspberry%20Non%20Dairy%20Sorbet.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Salted%20Caramel%20Corn%20LowFat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Strawberry%20Banana%20No%20sugar%20Added.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Strawberry%20Lemonade%20Non%20Dairy%20Sorbet.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Sweet%20Coconut%20Low%20Fat%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Vanilla%20No%20Sugar%20Added%20Froyo.jpg",
    "https://raw.githubusercontent.com/DiddysYogurt/Diddy-s-Website/main/images/Very%20Stawberry%20Nonfat%20Froyo.jpg"
];

// Function to change background
function changeBackground() {
    const body = document.body;
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
    body.style.backgroundSize = "cover"; // Ensures full coverage
    body.style.backgroundPosition = "center"; // Centers the image
}

// Automatically change background every 5 seconds
setInterval(changeBackground, 5000);

];

// Function to change background
function changeBackground() {
    const body = document.body;
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
}

// Automatically change background every 5 seconds
setInterval(changeBackground, 5000);

