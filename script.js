document.addEventListener("DOMContentLoaded", () => {
    const flavorList = document.getElementById("flavor-list");

    // List of flavor images
    const flavors = [
        "Cake Batter Lowfat Froyo",
        "Cheesecake No Sugar Added Froyo",
        "Choclate Classic Nonfat Froyo",
        "Cookies N' Cream Nonfat Froyo",
        "Cotton Candy Nonfat Froyo",
        "Georgia Peach Nonfat Froyo",
        "Hawaiian Pineapple Nonfat Froyo",
        "Island Banana NonFat Froyo",
        "Mango Sunrise Non Dairy Sorbert",
        "Pomegranate Raspberry Non Dairy Sorbet",
        "Salted Caramel Corn LowFat Froyo",
        "Strawberry Banana No sugar Added",
        "Strawberry Lemonade Non Dairy Sorbet",
        "Sweet Coconut Low Fat Froyo",
        "Vanilla No Sugar Added Froyo",
        "Very Stawberry Nonfat Froyo"
    ];

    flavors.forEach(flavor => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        
        link.href = `images/${flavor}.jpg`; // Links directly to images
        link.target = "_blank"; // Opens in a new tab
        link.textContent = flavor;

        listItem.appendChild(link);
        flavorList.appendChild(listItem);
    });
});
