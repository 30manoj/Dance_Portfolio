// Fade-in animation on scroll

const reveals = document.querySelectorAll(
'.section, .service-card, .video-card, .testimonial-card'
);

function revealOnScroll(){

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){
            item.classList.add('reveal');
            item.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Navbar shadow while scrolling

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.2)";
    }else{
        navbar.style.boxShadow = "none";
    }

});


// Current year in footer

const footer = document.querySelector('footer p');

if(footer){
    footer.innerHTML =
    `© ${new Date().getFullYear()} Manoj Gopi | Dance Instructor & Choreographer`;
}


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });

    });

});