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

document.addEventListener('DOMContentLoaded', function () {
    const clickableDivs = document.querySelectorAll('.liste > div');
    const displayedImage = document.getElementById('displayed-image');
  
    const images = [
      'asset/accueil/photo1.jpg',
      'asset/accueil/photo2.jpg',
      'asset/accueil/photo3.jpg',
      'asset/accueil/photo4.jpg',
      'asset/accueil/photo5.png',
      'asset/accueil/photo6.jpg',
    ];
  
    clickableDivs.forEach((div) => {
      div.addEventListener('mousedown', function () {
        clickableDivs.forEach((el) => el.classList.remove('active'));
  
        const index = div.dataset.index;
        if (index !== undefined && index >= 0 && index < images.length) {
          const imagePath = images[index];
          displayedImage.src = imagePath;
        }
  
        div.classList.add('active');
      });
    });
  });
    
  
  
  