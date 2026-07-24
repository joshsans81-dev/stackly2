document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth Apple-like Mobile Menu Toggle Script
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
    }

    // 2. Apple-like Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element enters the viewport
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once it has animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target every element marked with the .reveal-up class
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });
});
