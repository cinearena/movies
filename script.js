// JavaScript to handle automatic slider change every 3 seconds

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-content .slide');
const totalSlides = slides.length;

function changeSlide() {
  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');
  
  // Show the current slide
  slides[currentSlide].style.display = 'block';
  
  // Move to the next slide
  currentSlide = (currentSlide + 1) % totalSlides;
}

// Initially show the first slide
changeSlide();

// Change slide every 3 seconds
setInterval(changeSlide, 3000);

// JavaScript for the "Watch Now" button click event
const watchButtons = document.querySelectorAll('.watch-btn');

watchButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Redirect to a movie page or trigger an action
    alert('Redirecting to movie page...');
    window.location.href = 'movie-page.html'; // Replace with your actual movie page URL
  });
});
