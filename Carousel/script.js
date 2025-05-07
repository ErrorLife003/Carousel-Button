const slider = document.querySelector('#slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
