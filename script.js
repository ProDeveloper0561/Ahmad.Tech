/*====================================
        PORTFOLIO JAVASCRIPT
====================================*/


// ===============================
// Mobile Menu
// ===============================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

};


// ===============================
// Active Menu On Scroll
// ===============================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');

        }

    });



// ===============================
// Sticky Header
// ===============================

let header = document.querySelector('.header');

header.classList.toggle("sticky", window.scrollY > 100);



// ===============================
// Close Mobile Menu
// ===============================

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};


// ===============================
// Typing Effect
// ===============================

const typingText = document.querySelector(".multiple-text");

const words = [

    "Student",
    "Future Web Developer",
    "Frontend Developer",
    "HTML Learner",
    "CSS Designer",
    "JavaScript Learner"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
        currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex == currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingText.textContent =
        currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex == 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex == words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();



// ===============================
// Scroll Animation
// ===============================

const revealElements = document.querySelectorAll(

".skill-box,.project-box,.edu-card,.about-content,.home-content,.contact form"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        let windowHeight = window.innerHeight;

        let revealTop = element.getBoundingClientRect().top;

        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = ".8s";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.querySelector(".footer-iconTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});



// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let inputs = form.querySelectorAll("input, textarea");

let valid = true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid = false;

input.style.border="2px solid red";

}

else{

input.style.border="2px solid #00abf0";

}

});

if(valid){

alert("Thank You Ahmad Ali!\n\nYour message has been sent successfully.");

form.reset();

}

else{

alert("Please fill all fields.");

}

});

}



// ===============================
// Current Year
// ===============================

let year = new Date().getFullYear();

let footer = document.querySelector(".footer-text p");

if(footer){

footer.innerHTML =
`© ${year} Ahmad Ali | All Rights Reserved.<br>
Designed & Developed ❤️ By Ahmad Ali`;

}



// ===============================
// Console Message
// ===============================

console.log("===================================");

console.log(" Ahmad Ali Portfolio Loaded ");

console.log(" Welcome Developer ");

console.log("===================================");