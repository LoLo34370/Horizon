document.addEventListener('DOMContentLoaded', function () {

    // darkmode

    const checkbox = document.getElementById('darkModeSheet');
    const darkModeSheet = document.querySelector('link[href="darkModeSheet.css"]');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            darkModeSheet.removeAttribute('disabled');
        } else {
            darkModeSheet.setAttribute('disabled', 'disabled');
        }
    });

    // repsonsive header

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    })
});