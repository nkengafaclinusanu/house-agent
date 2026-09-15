// Initialize Lucide Icons

lucide.createIcons();


// ==============================
// SEARCH PROPERTIES
// ==============================

const searchBtn =
    document.getElementById("searchBtn");

const locationInput =
    document.getElementById("location");

const propertyType =
    document.getElementById("propertyType");

const priceRange =
    document.getElementById("priceRange");


searchBtn.addEventListener("click", function () {

    const location =
        locationInput.value;

    const type =
        propertyType.value;

    const price =
        priceRange.value;


    console.log("Searching properties:");

    console.log({
        location: location,
        propertyType: type,
        priceRange: price
    });


    // Example feedback

    if (
        location === "" &&
        type === "" &&
        price === ""
    ) {

        alert(
            "Please enter a location or select a property filter."
        );

        return;
    }


    alert(
        "Searching for properties..."
    );

});


// ==============================
// FAVORITE BUTTONS
// ==============================

const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            button.classList.toggle("liked");

        }
    );

});


// ==============================
// LIST PROPERTY BUTTON
// ==============================

const listButton =
    document.querySelector(".owner-card .dark-btn");


listButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "signup.html";

    }
);


// ==============================
// BROWSE LISTINGS BUTTON
// ==============================

const browseButton =
    document.querySelector(".renter-card .dark-btn");


browseButton.addEventListener(
    "click",
    function () {

        document
            .getElementById("properties")
            .scrollIntoView({

                behavior: "smooth"

            });

    }
);