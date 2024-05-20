// ARROW
var arrow = document.querySelectorAll('.arrow');
console.log('just loaded again')

for(let i = 0; i < arrow.length; i++) {
  console.log('just loaded 3rd time ')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) { 
      arrow[i].style.opacity = '0';
      console.log('scroll has happened')
  
    } else if (window.scrollY === 0) {
      arrow[i].style.opacity = '0.7';

  
    } else {
      arrow[i].style.opacity = '0.7';

    }
  });
  
}
console.log('just loaded 4th')

// slide on first and last slides 
carousel.onSwipe = function(event) {
  var currentItemIndex = carousel.getCurrentItemIndex();

  if (currentItemIndex === 0) {
    console.log('just loaded 5th')

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

