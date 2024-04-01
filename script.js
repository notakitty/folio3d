// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
    });

    // ... existing lightbox functionality ...
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Code for future interactivity goes here.
    // For example, initializing a lightbox plugin or handling click events on images.
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select all grid images
    const gridImages = document.querySelectorAll('.grid-item img');
    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];

    // Add click event to grid images
    gridImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Click on the close button to close the lightbox
    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
