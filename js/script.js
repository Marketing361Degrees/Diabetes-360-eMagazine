carousel.onSwipe = function(event) {
  var currentItemIndex = carousel.getCurrentItemIndex();

  if (currentItemIndex === 0) {
    event.stopPropagation(); // Prevents the swipe action from sliding backwards
    // or
    return false; // Alternative way to prevent the swipe action
  }
  
  var totalItems = carousel.getTotalItems();

  if (currentItemIndex === totalItems - 1) {
    event.stopPropagation(); // Prevents the swipe action from sliding forwards
    // or
    return false; // Alternative way to prevent the swipe action
  }
};

// ARROW
var arrows = document.querySelectorAll('.arrow');

document.addEventListener('scroll', handleScroll);

function handleScroll() {
  arrows.forEach(function(arrow) {
    arrow.setAttribute("hidden", "");
  });
}