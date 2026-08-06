// Exide Care Authorized Dealer | SC

console.log("Website Loaded Successfully");

// Sticky Header
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// Smooth Button Hover Effect
const buttons = document.querySelectorAll(".hero-buttons a, .call-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

        button.style.transition = "0.3s";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

console.log("JavaScript Ready");
