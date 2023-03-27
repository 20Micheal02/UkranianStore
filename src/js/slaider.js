const slider = document.querySelector('.slider__conteiner');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#right');
const btnPrev = document.querySelector('#left');
const activeClass = 'slider-active';
const hiddenClass = 'slider-hidden';

// Додаємо клас елементу
function addClass(element, className) {
  element.classList.add(className);
}

// Видаляємо клас елементу
function removeClass(element, className) {
  element.classList.remove(className);
}

// Перемикаємо між слайдами
function toggleSlide(currentSlide, nextSlide) {
  addClass(currentSlide, hiddenClass);
  removeClass(nextSlide, hiddenClass);
}

// Перемикаємо наступний слайд
function nextSlide() {
  const currentSlide = slider.querySelector(`.${activeClass}`);
  const currentSlideIndex = sliderItems.indexOf(currentSlide);
  const nextSlideIndex = currentSlideIndex === sliderItems.length - 1 ? 0 : currentSlideIndex + 1;
  const nextSlide = sliderItems[nextSlideIndex];

  removeClass(currentSlide, activeClass);
  addClass(nextSlide, activeClass);
  toggleSlide(currentSlide, nextSlide);
}

// Перемикаємо попередній слайд
function prevSlide() {
  const currentSlide = slider.querySelector(`.${activeClass}`);
  const currentSlideIndex = sliderItems.indexOf(currentSlide);
  const prevSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const prevSlide = sliderItems[prevSlideIndex];

  removeClass(currentSlide, activeClass);
  addClass(prevSlide, activeClass);
  toggleSlide(currentSlide, prevSlide);
}

// Встановлюємо початковий стан слайдера
function initializeSlider() {
  addClass(sliderItems[0], activeClass);
  sliderItems.forEach((slide, index) => {
    slide.dataset.index = index;
    if (index !== 0) {
      addClass(slide, hiddenClass);
    }
  });
}

initializeSlider();
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
