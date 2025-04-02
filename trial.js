document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const faqItems = document.querySelectorAll(".faq-item");

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            navbar.classList.toggle("active");
            menuIcon.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                navbar.classList.remove("active");
                menuIcon.classList.remove("active");
            }
        });
    });

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
            if (window.innerWidth < 768) {
                navbar.classList.remove("active");
                menuIcon.classList.remove("active");
            }
        });
    });

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            body.classList.toggle("light-mode");
            header.classList.toggle("light-mode");
            themeToggle.classList.toggle("ph-moon");
            themeToggle.classList.toggle("ph-sun");
        });
    }

    if (window.jQuery) {
        $(".trainer-slider").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1000: { items: 3 },
                1200: { items: 4 }
            }
        });
    }

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        if (question && answer) {
            question.addEventListener("click", () => {
                item.classList.toggle("active");
                answer.style.display = answer.style.display === "block" ? "none" : "block";
            });
        }
    });
});