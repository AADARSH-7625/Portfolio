window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const aboutCont = document.getElementById("about-cont");
    const portfolio = document.getElementById("portfolio-page");
    const services = document.getElementById("services-cont");
    const skills = document.getElementById("skills-cont");
    const testimonial = document.getElementById("testimonial-section");
    const contact = document.getElementById("contact-cont");
    const footer = document.getElementById("footer");

    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
        aboutCont.classList.add("visible");
    } else {
        aboutCont.classList.remove("visible");
    }
    if (window.scrollY > 900) {
        portfolio.classList.add("visible");
    } else {
        portfolio.classList.remove("visible");
    }
    if (window.scrollY > 1500) {
        services.classList.add("visible");
    } else {
        services.classList.remove("visible");
    }
    if (window.scrollY > 2000) {
        skills.classList.add("visible");
    } else {
        skills.classList.remove("visible");
    }
    if (window.scrollY > 2500) {
        testimonial.classList.add("visible");
    } else {
        testimonial.classList.remove("visible");
    }
    if (window.scrollY > 2950) {
        contact.classList.add("visible");
    } else {
        contact.classList.remove("visible");
    }
    if (window.scrollY > 3400) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }

});
window.addEventListener("DOMContentLoaded",function(){
    const png=document.getElementById("png-cont");
    const content=document.getElementById("content");
    const navbar=document.getElementById("navbar");
    
    content.classList.add("show");
    png.classList.add("show");
    navbar.classList.add("slide");
});
// <!-- JavaScript to Toggle Menu -->
function toggleMenu() {
    const menu = document.getElementById("hamburgerMenu");
    menu.classList.toggle("active");
}
function closeMenu() {
    const menu = document.getElementById("hamburgerMenu");
    const overlay = document.getElementById("pageOverlay");
    menu.classList.remove("active");   // Hide the menu
    overlay.classList.remove("active"); // Hide the overlay
}
