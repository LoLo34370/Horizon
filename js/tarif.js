document.addEventListener('DOMContentLoaded', function () {

    // darkmode

    const checkbox = document.getElementById('tarif-dark');
    const tarif = document.querySelector('link[href="tarif-dark.css"]');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tarif.removeAttribute('disabled');
        } else {
            tarif.setAttribute('disabled', 'disabled');
        }
    });

    // repsonsive header

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    })
});