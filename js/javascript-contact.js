document.addEventListener('DOMContentLoaded', function () {

    // darkmode

    const checkbox = document.getElementById('contact-dark');
    const contact = document.querySelector('link[href="contact-dark.css"]');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            contact.removeAttribute('disabled');
        } else {
            contact.setAttribute('disabled', 'disabled');
        }
    });

    // repsonsive header

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    })
});