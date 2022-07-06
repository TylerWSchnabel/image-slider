const carouselSlide = document.getElementById('wrapper');
const carouselImages = document.querySelectorAll('div.image');
const navDots = document.querySelectorAll('div.navDot');

const prevBtn = document.getElementById('back');
const nextBtn = document.getElementById('forward');

let counter = 1;

const size = 800;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  timer()
});

prevBtn.addEventListener('click', () => {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  timer()
});
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    timer()
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    timer()
  }
});

for (let i = 0; i < navDots.length; i++) {
  navDots[i].addEventListener('click', () => {
    counter = navDots[i].id;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    timer();
  });
}

let timer = setInterval(function(){
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 5000);