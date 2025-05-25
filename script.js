document.addEventListener("DOMContentLoaded", () => {
    const flavorContainer = document.getElementById("flavor-container");

    // List of flavors with their corresponding image files
    const flavors = [
        { name: "Cake Batter Lowfat Froyo", file: "Cake Batter Lowfat Froyo.jpg" },
        { name: "Cheesecake No Sugar Added Froyo", file: "Cheesecake No Sugar Added Froyo.jpg" },
        { name: "Chocolate Classic Nonfat Froyo", file: "Choclate Classic Nonfat Froyo.jpg" },
        { name: "Cookies N' Cream Nonfat Froyo", file: "Cookies N' Cream Nonfat Froyo.jpg" },
        { name: "Cotton Candy Nonfat Froyo", file: "Cotton Candy Nonfat Froyo.jpg" },
        { name: "Georgia Peach Nonfat Froyo", file: "Georgia Peach Nonfat Froyo.jpg" },
        { name: "Hawaiian Pineapple Nonfat Froyo", file: "Hawaiian Pineapple Nonfat Froyo.jpg" },
        { name: "Island Banana NonFat Froyo", file: "Island Banana NonFat Froyo.jpg" },
        { name: "Mango Sunrise Non Dairy Sorbet", file: "Mango Sunrise Non Dairy Sorbert.jpg" },
        { name: "Pomegranate Raspberry Non Dairy Sorbet", file: "Pomegranate Raspberry Non Dairy Sorbet.jpg" },
        { name: "Salted Caramel Corn LowFat Froyo", file: "Salted Caramel Corn LowFat Froyo.jpg" },
        { name: "Strawberry Banana No Sugar Added", file: "Strawberry Banana No sugar Added.jpg" },
        { name: "Strawberry Lemonade Non Dairy Sorbet", file: "Strawberry Lemonade Non Dairy Sorbet.jpg" },
        { name: "Sweet Coconut Low Fat Froyo", file: "Sweet Coconut Low Fat Froyo.jpg" },
        { name: "Vanilla No Sugar Added Froyo", file: "Vanilla No Sugar Added Froyo.jpg" },
        { name: "Very Strawberry Nonfat Froyo", file: "Very Stawberry Nonfat Froyo.jpg" }
    ];

    flavors.forEach(flavor => {
        let flavorItem = document.createElement("div");
        flavorItem.classList.add("flavor-item");

        let imageElement = document.createElement("img");
        imageElement.src = `images/${flavor.file}`;
        imageElement.alt = flavor.name;

        let nameElement = document.createElement("p");
        nameElement.textContent = flavor.name;

        flavorItem.appendChild(imageElement);
        flavorItem.appendChild(nameElement);
        flavorContainer.appendChild(flavorItem);
    });
});
