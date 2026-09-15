/* =========================================
   HOMELINK ADMIN DASHBOARD
   JAVASCRIPT
========================================= */


/* =========================================
   SIDEBAR MENU
========================================= */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================================
   NOTIFICATION BUTTON
========================================= */

const notificationBtn =
    document.getElementById("notificationBtn");

notificationBtn.addEventListener("click", function() {

    let existingPopup =
        document.querySelector(".notification-popup");

    if (existingPopup) {
        existingPopup.remove();
        return;
    }

    const popup = document.createElement("div");

    popup.className = "notification-popup show";

    popup.innerHTML = `
        <strong>Notifications</strong>
        <p style="margin-top:10px;">
            You have 3 new notifications.
        </p>
    `;

    document.body.appendChild(popup);

});


/* =========================================
   SETTINGS BUTTON
========================================= */

const settingsBtn =
    document.getElementById("settingsBtn");

settingsBtn.addEventListener("click", function() {

    alert("Settings panel opened.");

});


/* =========================================
   VIEW ALL
========================================= */

const viewAll =
    document.getElementById("viewAll");

viewAll.addEventListener("click", function(event) {

    event.preventDefault();

    alert("Showing all recent activity.");

});


/* =========================================
   APPROVE PROPERTY
========================================= */

function approveProperty(button) {

    const card = button.closest(".property-card");

    const propertyName =
        card.querySelector("h3").textContent;

    button.innerHTML =
        '<i class="fa-solid fa-check"></i> Approved';

    button.style.background = "#333";

    button.disabled = true;

    alert(propertyName + " has been approved.");

}


/* =========================================
   REVIEW PROPERTY
========================================= */

function reviewProperty(propertyName) {

    alert(
        "Opening review for: " + propertyName
    );

}


/* =========================================
   ANIMATE STAT NUMBERS
========================================= */

function animateNumber(element, target, duration) {

    let start = 0;

    const startTime = performance.now();

    function update(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );

        const current =
            Math.floor(
                progress * target
            );

        element.textContent =
            current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }

    }

    requestAnimationFrame(update);
}


/* =========================================
   DASHBOARD LOAD ANIMATION
========================================= */

window.addEventListener("load", function() {

    const users =
        document.querySelector(".users-card .stat-number");

    const listings =
        document.querySelector(".listings-card .stat-number");

    /*
       Keep the percentage text after animation.
       The animation is intentionally simple.
    */

    console.log("HomeLink Dashboard Loaded");

});


/* =========================================
   CHART BAR HOVER EFFECT
========================================= */

const bars =
    document.querySelectorAll(".bar");

bars.forEach(bar => {

    bar.addEventListener("mouseenter", function() {

        this.style.transform =
            "scaleY(1.05)";

        this.style.transformOrigin =
            "bottom";

    });

    bar.addEventListener("mouseleave", function() {

        this.style.transform =
            "scaleY(1)";

    });

});/* =========================================
   HOMELINK ADMIN DASHBOARD
   JAVASCRIPT
========================================= */


/* =========================================
   SIDEBAR MENU
========================================= */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================================
   NOTIFICATION BUTTON
========================================= */

const notificationBtn =
    document.getElementById("notificationBtn");

notificationBtn.addEventListener("click", function() {

    let existingPopup =
        document.querySelector(".notification-popup");

    if (existingPopup) {
        existingPopup.remove();
        return;
    }

    const popup = document.createElement("div");

    popup.className = "notification-popup show";

    popup.innerHTML = `
        <strong>Notifications</strong>
        <p style="margin-top:10px;">
            You have 3 new notifications.
        </p>
    `;

    document.body.appendChild(popup);

});


/* =========================================
   SETTINGS BUTTON
========================================= */

const settingsBtn =
    document.getElementById("settingsBtn");

settingsBtn.addEventListener("click", function() {

    alert("Settings panel opened.");

});


/* =========================================
   VIEW ALL
========================================= */

const viewAll =
    document.getElementById("viewAll");

viewAll.addEventListener("click", function(event) {

    event.preventDefault();

    alert("Showing all recent activity.");

});


/* =========================================
   APPROVE PROPERTY
========================================= */

function approveProperty(button) {

    const card = button.closest(".property-card");

    const propertyName =
        card.querySelector("h3").textContent;

    button.innerHTML =
        '<i class="fa-solid fa-check"></i> Approved';

    button.style.background = "#333";

    button.disabled = true;

    alert(propertyName + " has been approved.");

}


/* =========================================
   REVIEW PROPERTY
========================================= */

function reviewProperty(propertyName) {

    alert(
        "Opening review for: " + propertyName
    );

}


/* =========================================
   ANIMATE STAT NUMBERS
========================================= */

function animateNumber(element, target, duration) {

    let start = 0;

    const startTime = performance.now();

    function update(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );

        const current =
            Math.floor(
                progress * target
            );

        element.textContent =
            current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }

    }

    requestAnimationFrame(update);
}


/* =========================================
   DASHBOARD LOAD ANIMATION
========================================= */

window.addEventListener("load", function() {

    const users =
        document.querySelector(".users-card .stat-number");

    const listings =
        document.querySelector(".listings-card .stat-number");

    /*
       Keep the percentage text after animation.
       The animation is intentionally simple.
    */

    console.log("HomeLink Dashboard Loaded");

});


/* =========================================
   CHART BAR HOVER EFFECT
========================================= */

const bars =
    document.querySelectorAll(".bar");

bars.forEach(bar => {

    bar.addEventListener("mouseenter", function() {

        this.style.transform =
            "scaleY(1.05)";

        this.style.transformOrigin =
            "bottom";

    });

    bar.addEventListener("mouseleave", function() {

        this.style.transform =
            "scaleY(1)";

    });

});