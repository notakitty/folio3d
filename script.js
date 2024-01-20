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
