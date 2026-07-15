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
