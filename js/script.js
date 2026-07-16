const particles = document.querySelector(".particles");

if(particles){

    for(let i = 0; i < 40; i++){

        let particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random()*100 + "%";
        particle.style.top = Math.random()*100 + "%";

        particle.style.animationDelay =
        Math.random()*5 + "s";

        particles.appendChild(particle);

    }

}


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
/* Cursor-following card glow */

const interactiveCards = document.querySelectorAll(
    ".card, .stat-card, .progress-card, .content, .about-section, " +
    ".skill-card, .cert-card, .experience-card, .contact-card"
);


interactiveCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", mouseX + "px");
        card.style.setProperty("--mouse-y", mouseY + "px");

    });

});
/* ==========================================================
        CURSOR CARD TILT
========================================================== */

const tiltCards = document.querySelectorAll(
    ".card, .stat-card, .progress-card, .content, .about-section, " +
    ".skill-card, .cert-card, .experience-card, .contact-card"
);


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 12;

        const rotateX =
            ((centerY - y) / centerY) * 12;

        card.style.setProperty(
            "--rotate-x",
            rotateX + "deg"
        );

        card.style.setProperty(
            "--rotate-y",
            rotateY + "deg"
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.setProperty(
            "--rotate-x",
            "0deg"
        );

        card.style.setProperty(
            "--rotate-y",
            "0deg"
        );

    });

});
/* =========================================
   PAGE SCROLL PROGRESS INDICATOR
========================================= */

function updatePageScrollProgress() {
    const progressFill = document.querySelector(
        ".page-scroll-progress-fill"
    );

    if (!progressFill) return;

    const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        scrollableHeight > 0
            ? (scrollTop / scrollableHeight) * 100
            : 0;

    progressFill.style.width =
        `${Math.min(Math.max(scrollPercentage, 0), 100)}%`;
}

window.addEventListener(
    "scroll",
    updatePageScrollProgress,
    { passive: true }
);

window.addEventListener(
    "resize",
    updatePageScrollProgress
);

document.addEventListener(
    "DOMContentLoaded",
    updatePageScrollProgress
);
/* ==========================================================
        SIMPLE PAGE LOADING TRANSITION
========================================================== */

document.body.classList.add("page-enter");


window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.remove("page-enter");

    }, 150);

});


const pageLinks = document.querySelectorAll(
    'a[href$=".html"], a[href="./"], a[href="/"]'
);


pageLinks.forEach(link => {

    link.addEventListener("click", event => {

        const href = link.getAttribute("href");


        if(
            !href ||
            link.target === "_blank" ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        ){

            return;

        }


        event.preventDefault();

        document.body.classList.add("page-exit");


        setTimeout(() => {

            window.location.href = href;

        }, 180);

    });

});


window.addEventListener("pageshow", () => {

    document.body.classList.remove("page-exit");

});
/* ==========================================================
                    BUTTON RIPPLE
========================================================== */

const rippleButtons = document.querySelectorAll(
    ".btn, button, .nav-btn, .download-btn, .contact-btn"
);


rippleButtons.forEach(button => {

    button.addEventListener("click", event => {

        const rect = button.getBoundingClientRect();

        const ripple = document.createElement("span");

        ripple.classList.add("button-ripple");

        ripple.style.left =
            event.clientX - rect.left + "px";

        ripple.style.top =
            event.clientY - rect.top + "px";

        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
/* ==========================================================
                    MAGNETIC BUTTONS
========================================================== */

const magneticButtons = document.querySelectorAll("button");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.setProperty(
            "transform",
            `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`,
            "important"
        );

    });

    button.addEventListener("mouseleave", () => {

        button.style.setProperty(
            "transform",
            "translate(0, 0) scale(1)",
            "important"
        );

    });

});
/* ==========================================================
                    CUSTOM CURSOR
========================================================== */

const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".custom-cursor-dot");


if(cursor && cursorDot){

    let cursorX = 0;
    let cursorY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener("mousemove", event => {

        cursorX = event.clientX;
        cursorY = event.clientY;

        cursorDot.style.left = cursorX + "px";
        cursorDot.style.top = cursorY + "px";

    });


    function animateCursor(){

        ringX += (cursorX - ringX) * 0.18;
        ringY += (cursorY - ringY) * 0.18;

        cursor.style.left = ringX + "px";
        cursor.style.top = ringY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    const interactiveElements = document.querySelectorAll(
        "a, button, .card, .stat-card, .about-section, .content"
    );
    
    
    interactiveElements.forEach(element => {
    
        element.addEventListener("mouseenter", () => {
    
            cursor.classList.add("hovering");
    
        });
    
    
        element.addEventListener("mouseleave", () => {
    
            cursor.classList.remove("hovering");
    
        });
    
    });
}
/* ==========================================================
                COMMAND PALETTE
========================================================== */

const commandPalette = document.querySelector(".command-palette");
const commandInput = document.querySelector("#commandInput");
const commandLinks = document.querySelectorAll(".command-results a");

function openCommandPalette(){

    commandPalette.classList.add("open");

    setTimeout(() => {

        commandInput.focus();

    }, 100);

}

function closeCommandPalette(){

    commandPalette.classList.remove("open");

    commandInput.value = "";

    commandLinks.forEach(link => {

        link.style.display = "block";

    });

}

document.addEventListener("keydown", event => {

    if((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k"){

        event.preventDefault();

        commandPalette.classList.contains("open")
            ? closeCommandPalette()
            : openCommandPalette();

    }

    if(event.key === "Escape"){

        closeCommandPalette();

    }

});

commandPalette.addEventListener("click", event => {

    if(event.target === commandPalette){

        closeCommandPalette();

    }

});

commandInput.addEventListener("input", () => {

    const searchValue = commandInput.value.toLowerCase().trim();

    commandLinks.forEach(link => {

        const linkText = link.textContent.toLowerCase();

        link.style.display =
            linkText.includes(searchValue)
                ? "block"
                : "none";

    });

});
/* ==========================================================
                    BACK TO TOP BUTTON
========================================================== */

const backToTopButton = document.querySelector(".back-to-top");

if(backToTopButton){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            backToTopButton.classList.add("show");

        }else{

            backToTopButton.classList.remove("show");

        }

    });


    backToTopButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}
