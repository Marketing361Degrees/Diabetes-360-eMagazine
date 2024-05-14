let prev = document.querySelector('.carousel-control-prev');
let nxt = document.querySelector('.carousel-control-next');
let carouselItems = document.querySelectorAll('.carousel-item');
let homeIcon = document.querySelectorAll('.home-icon');

// Function to update the visibility of navigation buttons
function updateNavButtons() {
  let activeSlideIndex = [...carouselItems].findIndex(item => item.classList.contains('active'));
  // Show prev button if not on the first slide
  prev.style.display = activeSlideIndex === 0 ? "none" : "block";
  // Show next button if not on the last slide
  nxt.style.display = activeSlideIndex === carouselItems.length - 1 ? "none" : "block";
}

// Initial call to set the correct visibility
updateNavButtons();

// Add event listeners to update button visibility on click
nxt.addEventListener('click', () => {
  let activeSlideIndex = [...carouselItems].findIndex(item => item.classList.contains('active'));
  if (activeSlideIndex === carouselItems.length - 2) {
    nxt.style.display = "none"; // Hide next button on second-to-last slide
  }
  if (activeSlideIndex === 0) {
    // Show prev button on subsequent slides
    prev.style.display = "block"; 
  }
});

prev.addEventListener('click', () => {
  let activeSlideIndex = [...carouselItems].findIndex(item => item.classList.contains('active'));
  if (activeSlideIndex === carouselItems.length - 1) {
    nxt.style.display = "block"; // Show next button when going back from last slide
  } else if (activeSlideIndex === 1) {
    prev.style.display = "none"; // Hide prev button when going back to the first slide
  }
});

// Listener for carousel slide event
document.addEventListener('slideChanged', updateNavButtons);

// Hide previous when clicking on Home Icon
for (let i = 0; i < homeIcon.length; i++) {
  homeIcon[i].addEventListener('click', () => {
    prev.style.display = "none";
  });
}

// Prevent sliding right after the last slide
// Attach a single event listener to the parent element of carouselItems
document.addEventListener('touchmove', (event) => {
  // Assuming 'carousel' is the parent container of carouselItems
  let carousel = document.querySelector('.carousel');
  let activeSlideIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));

  // Prevent sliding right on the last slide
  if (activeSlideIndex === carousel.querySelectorAll('.carousel-item').length - 1) {
    event.preventDefault();
  }

  // Prevent sliding left on the first slide
  if (activeSlideIndex === 0) {
    event.preventDefault();
  }
}, { passive: false }); // Use passive: false to allow preventDefault()
