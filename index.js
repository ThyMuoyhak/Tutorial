// JavaScript for responsive navbar
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scroll to courses section
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}
