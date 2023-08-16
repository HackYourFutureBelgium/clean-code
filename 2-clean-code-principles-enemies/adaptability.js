'use strict';

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Function to show the current image
const showImage = (index) => {
    const images = carousel.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
};

const previousButtonHandler = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carousel.getElementsByTagName('img').length - 1;
    }
    showImage(currentIndex);
};

const nextButtonHandler = () => {
    currentIndex++;
    if (currentIndex >= carousel.getElementsByTagName('img').length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
};

// Show the initial image
showImage(currentIndex);

// Event listener for the previous button
prevBtn.addEventListener('click', previousButtonHandler);

// Event listener for the next button
nextBtn.addEventListener('click', nextButtonHandler);

/*
What if we need to add a new requirement , for example
To add fade-in and fade-out behavior to the images in the carousel

*/
