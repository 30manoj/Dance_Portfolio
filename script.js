const reveals = document.querySelectorAll(
    '.section, .service-card, .video-card, .testimonial-card'
);

function revealOnScroll() {
    reveals.forEach(item => {
        if (
            item.getBoundingClientRect().top <
            window.innerHeight - 120
        ) {
            item.classList.add('reveal', 'active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.style.boxShadow =
        window.scrollY > 50
            ? '0 4px 20px rgba(0,0,0,0.2)'
            : 'none';
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('#lightbox img');

function openLightbox(imgSrc) {
    if (lightbox && lightboxImg) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imgSrc;
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Manoj Gopi | Dance Instructor & Choreographer`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', e => {

        e.preventDefault();

        document.querySelector(
            anchor.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});