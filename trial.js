document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
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