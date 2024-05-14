let prev = document.querySelector('.carousel-control-prev');
let nxt = document.querySelector('.carousel-control-next');
let carouselItems = document.querySelectorAll('.carousel-item');

let firstSlide = carouselItems[0];
let secondSlide = carouselItems[1];
let lastSlide = carouselItems[carouselItems.length - 1];
let beforeLastSlide = carouselItems[carouselItems.length - 2];

let firstSlideClassList = firstSlide.classList;
let lastSlideClassList = lastSlide.classList;
let secondSlideClassList = secondSlide.classList;
let beforeSlideClassList = beforeLastSlide.classList;

if (firstSlideClassList.contains('active')) {
    prev.setAttribute('hidden', '');
} else if (lastSlideClassList.contains('active')) {
    nxt.setAttribute('hidden', '');
} else if (secondSlideClassList.contains('active') || beforeSlideClassList.contains('active')){
    prev.removeAttribute('hidden');
    nxt.removeAttribute('hidden');
} else {
    console.log('done')
}


// console.log('First Slide Classes:', firstSlide.classList);
// console.log('Last Slide Classes:', lastSlide.classList);

// firstSlideClassList.contains('active') ? prev.setAttribute('hidden', '') : prev.removeAttribute('hidden');
// lastSlideClassList.contains('active') ? nxt.setAttribute('hidden', '') : nxt.removeAttribute('hidden');


