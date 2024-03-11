// Get logo element
const logo = document.getElementById('logo');
// Get about section
const aboutSection = document.getElementById('about');
// Get heading line
const headingLine = document.getElementById('heading-line');

// Add event listener for mouse enter
logo.addEventListener('mouseenter', () => {
    // Show the about section when mouse enters the logo
    aboutSection.classList.add('show');

    // Animate heading line
    headingLine.style.width = '100%';
});

// Add event listener for mouse leave
logo.addEventListener('mouseleave', () => {
    // Hide the about section when mouse leaves the logo
    aboutSection.classList.remove('show');

    // Reset heading line
    headingLine.style.width = '0';
});

// Carousel functionality
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    for (let i = 0; i < carouselSlides.length; i++) {
        if (i === currentIndex) {
            carouselSlides[i].style.display = 'block';
        } else {
            carouselSlides[i].style.display = 'none';
        }
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    goToSlide(currentIndex);
}

const carouselSlides1 = document.querySelectorAll('.carousel-slide1');
let currentIndex1 = 0;

function goToSlide1(index) {
    currentIndex1 = index;
    for (let i = 0; i < carouselSlides1.length; i++) {
        if (i === currentIndex1) {
            carouselSlides1[i].style.display = 'block';
        } else {
            carouselSlides1[i].style.display = 'none';
        }
    }
}

function nextSlide1() {
    currentIndex1 = (currentIndex1 + 1) % carouselSlides1.length;
    goToSlide1(currentIndex1);
}


// Initialize carousel with the first slide displayed
goToSlide(0);
goToSlide1(0)

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextSlide);

const problemstatements = document.getElementById('problemstatements');
problemstatements.addEventListener('click', nextSlide1);