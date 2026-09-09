/* =========================================
   SELECT ELEMENTS
========================================= */

const menuBtn = document.getElementById("menu-btn");

const closeMenuBtn = document.getElementById("close-menu");

const navMenu = document.getElementById("nav-menu");

const menuOverlay = document.getElementById("menu-overlay");

const navLinks = document.querySelectorAll(".nav-menu a");

const themeToggle =
    document.getElementById("theme-toggle");

const backToTop =
    document.getElementById("back-to-top");


/* =========================================
   OPEN MOBILE MENU
========================================= */

function openMenu() {

    navMenu.classList.add("active");

    menuOverlay.classList.add("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    menuBtn.textContent = "✕";

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

function closeMenu() {

    navMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuBtn.textContent = "☰";

    document.body.style.overflow = "";
}


/* =========================================
   HAMBURGER BUTTON
========================================= */

menuBtn.addEventListener(
    "click",
    function () {

        const isOpen =
            navMenu.classList.contains("active");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }
);


/* =========================================
   CROSS BUTTON
========================================= */

closeMenuBtn.addEventListener(
    "click",
    function () {

        closeMenu();

    }
);


/* =========================================
   CLICK GLASS BACKGROUND
========================================= */

menuOverlay.addEventListener(
    "click",
    function () {

        closeMenu();

    }
);


/* =========================================
   CLOSE MENU AFTER LINK CLICK
========================================= */

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    }
);


/* =========================================
   CLOSE MENU WITH ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


/* =========================================
   CLOSE MENU WHEN DESKTOP
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth >= 768) {

            closeMenu();

        }

    }
);


/* =========================================
   DARK / LIGHT MODE
========================================= */

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const darkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        if (darkMode) {

            themeToggle.textContent = "☀";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeToggle.textContent = "☾";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    }
);


/* =========================================
   BACK TO TOP
========================================= */

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            const windowHeight =
                window.innerHeight;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* =========================================
   CHECK ON PAGE LOAD
========================================= */

revealOnScroll();


/* =========================================
   REQUESTED SMALL CHANGES
========================================= */

/* 1 & 2. Cursor shine + typing animation */
const cursorShine = document.getElementById("cursor-shine");
const typedText = document.querySelector(".typed-text");

if (cursorShine) {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursorShine.classList.add("active");
    });

    function moveCursorShine() {
        currentX += (mouseX - currentX) * 0.14;
        currentY += (mouseY - currentY) * 0.14;

        cursorShine.style.left = currentX + "px";
        cursorShine.style.top = currentY + "px";

        requestAnimationFrame(moveCursorShine);
    }

    moveCursorShine();

    document.addEventListener("mouseleave", function () {
        cursorShine.classList.remove("active");
    });

    document.addEventListener("mouseenter", function () {
        cursorShine.classList.add("active");
    });
}

if (typedText) {
    const typingWords = [
        "Web Developer",
        "Frontend Developer",
        "Creative Coder"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeText() {
        const currentWord = typingWords[wordIndex];

        if (!deleting) {
            typedText.textContent = currentWord.slice(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeText, 1400);
                return;
            }
        } else {
            typedText.textContent = currentWord.slice(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % typingWords.length;
            }
        }

        setTimeout(typeText, deleting ? 55 : 90);
    }

    typeText();
}












