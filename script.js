// 1. Open and close the mobile navigation.
const menuButton = document.querySelector('#menuButton');
const navLinks = document.querySelector('#navLinks');

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
});

// Close the mobile navigation when a link is clicked.
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
    });
});

// 2. Switch between light and dark themes.
const themeButton = document.querySelector('#themeButton');

themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeButton.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
    themeButton.setAttribute('aria-pressed', String(isDark));
});

// 3. Validate the form (without claiming to send it to a server).
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    formMessage.textContent = 'Form checked successfully! This is a demo form; no message was sent.';
    contactForm.reset();
});

// 4. Update the footer year automatically.
document.querySelector('#year').textContent = new Date().getFullYear();
