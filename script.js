document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");

    // List of flavor images stored in the "images" folder
    const images = [
        "Cake Batter Lowfat Froyo.jpg",
        "Cheesecake No Sugar Added Froyo.jpg",
        "Choclate Classic Nonfat Froyo.jpg",
        "Cookies N' Cream Nonfat Froyo.jpg",
        "Cotton Candy Nonfat Froyo.jpg",
        "Georgia Peach Nonfat Froyo.jpg",
        "Georgia peach.jpg",
        "Hawaiian Pineapple Nonfat Froyo.jpg",
        "Island Banana NonFat Froyo.jpg",
        "Mango Sunrise Non Dairy Sorbert.jpg",
        "Pomegranate Raspberry Non Dairy Sorbet.jpg",
        "Salted Caramel Corn LowFat Froyo.jpg",
        "Strawberry Banana No sugar Added.jpg",
        "Strawberry Lemonade Non Dairy Sorbet.jpg",
        "Sweet Coconut Low Fat Froyo.jpg",
        "Vanilla No Sugar Added Froyo.jpg",
        "Very Stawberry Nonfat Froyo.jpg"
    ];

    images.forEach(img => {
        let imageElement = document.createElement("img");
        imageElement.src = `images/${img}`;
        imageElement.alt = img.replace(/\.[^/.]+$/, "").replace(/-/g, " "); // Removes file extension and hyphens
        imageElement.classList.add("flavor-image"); // Add styling class
        imageContainer.appendChild(imageElement);
    });
});
