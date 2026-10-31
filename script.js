
/* ==========================================
   CHEMROON ENTERPRISES LTD
   WEBSITE JAVASCRIPT
========================================== */


/* 1. AUTOMATIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 2. MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link

    navMenu.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";
        });

    });

}


/* 3. QUOTATION FORM */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get customer details

        const name = document.getElementById("customerName").value.trim();

        const email = document.getElementById("customerEmail").value.trim();

        const phone = document.getElementById("customerPhone").value.trim();

        const category = document.getElementById("category").value;

        const message = document.getElementById("message").value.trim();


        // Check required information

        if (!name || !email || !phone || !category || !message) {

            alert("Please complete all fields before sending your enquiry.");

            return;
        }


        // Prepare email

        const subject = encodeURIComponent(
            "Quotation Request - " + category
        );

        const body = encodeURIComponent(
            "NEW QUOTATION REQUEST\n\n" +
            "Customer Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Phone Number: " + phone + "\n" +
            "Supply Category: " + category + "\n\n" +
            "Product Requirements:\n" + message
        );


        // Open customer's default email application

        const emailLink =
            "mailto:info@chemroonenterprises.co.ke" +
            "?subject=" + subject +
            "&body=" + body;

        window.location.href = emailLink;

    });

}
