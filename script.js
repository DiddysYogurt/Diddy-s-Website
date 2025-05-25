document.addEventListener("DOMContentLoaded", () => {
    const flavorList = document.getElementById("flavor-list");

    // List of flavors with links to dedicated pages
    const flavors = [
        { name: "Cake Batter Lowfat Froyo", file: "flavors/cakebatter.html" },
        { name: "Cheesecake No Sugar Added Froyo", file: "flavors/cheesecake.html" },
        { name: "Choclate Classic Nonfat Froyo", file: "flavors/chocolate.html" },
        { name: "Cookies N' Cream Nonfat Froyo", file: "flavors/cookies.html" },
        { name: "Cotton Candy Nonfat Froyo", file: "flavors/cotton-candy.html" },
        { name: "Georgia Peach Nonfat Froyo", file: "flavors/georgia-peach.html" },
        { name: "Hawaiian Pineapple Nonfat Froyo", file: "flavors/hawaiian-pineapple.html" },
        { name: "Island Banana NonFat Froyo", file: "flavors/island-banana.html" },
        { name: "Mango Sunrise Non Dairy Sorbert", file: "flavors/mango-sunrise.html" }
    ];

    flavors.forEach(flavor => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");

        link.href = flavor.file; // Links to the flavor’s dedicated page
        link.textContent = flavor.name;

        listItem.appendChild(link);
        flavorList.appendChild(listItem);
    });
});


