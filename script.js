document.addEventListener("DOMContentLoaded", function () {
    // Toggle Hamburger Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

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

    // Automatically change background every 5 seconds
    setInterval(changeBackground, 5000);
});
