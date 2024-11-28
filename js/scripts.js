document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', changeLinkState);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset();
});

// Adding scroll animations
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach(section => {
    observer.observe(section);
});

// Adding dynamic header background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.style.fontSize = '1.5rem';
    navToggle.style.background = 'none';
    navToggle.style.border = 'none';
    navToggle.style.color = '#fff';
    navToggle.style.cursor = 'pointer';
    navToggle.style.position = 'absolute';
    navToggle.style.top = '1rem';
    navToggle.style.right = '1rem';

    const nav = document.querySelector('header nav ul');
    document.querySelector('header').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});




function toggleMenu() {
    const menu = document.querySelector('header nav .right ul');
    menu.classList.toggle('show');
}

