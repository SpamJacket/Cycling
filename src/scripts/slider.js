const roadsBlock = document.querySelector('.roads');
let slider = roadsBlock.querySelector('.roads__slider');
let newSlider = slider.cloneNode(true);
const sliderGradient = roadsBlock.querySelector('.roads__gradient');
const sliderButtonPrevious = roadsBlock.querySelector('.roads__button_type_previous');
const sliderButtonNext = roadsBlock.querySelector('.roads__button_type_next');

const sliderImages = [
  {
    src: './images/roads/tt.png',
    alt: 'Фотография равнины',
    gradient: '../images/icons/tt.svg'
  },
  {
    src: './images/roads/highway.png',
    alt: 'Фотография шоссе',
    gradient: '../images/icons/highway.svg'
  },
  {
    src: './images/roads/grevel.png',
    alt: 'Фотография бездорожья',
    gradient: '../images/icons/grevel.svg'
  },
  {
    src: './images/roads/tt.png',
    alt: 'Фотография равнины',
    gradient: '../images/icons/tt.svg'
  },
  {
    src: './images/roads/highway.png',
    alt: 'Фотография шоссе',
    gradient: '../images/icons/highway.svg'
  }
];

let flag = 1;

function renderLeftHiddenImages() {
  newSlider.style.setProperty('--image-number', 0);
  slider.replaceWith(newSlider);
  slider = roadsBlock.querySelector('.roads__slider');
  newSlider = slider.cloneNode(true);
  flag = 0;
}

function renderRightHiddenImages() {
  newSlider.style.setProperty('--image-number', 3);
  slider.replaceWith(newSlider);
  slider = roadsBlock.querySelector('.roads__slider');
  newSlider = slider.cloneNode(true);
  flag = 3;
}

function swipeLeft() {
  sliderButtonNext.removeEventListener('click', swipeLeft);
  slider.style.setProperty('--image-number', flag + 1);
  flag += 1;
  sliderGradient.style.setProperty('--gradient-size-mobile', 0);
  sliderGradient.style.setProperty('--gradient-size', 0);
  setTimeout(() => {
    sliderGradient.style.setProperty('--gradient-url', `url("${sliderImages[flag].gradient}")`);
    sliderGradient.style.setProperty('--gradient-size-mobile', '35px');
    sliderGradient.style.setProperty('--gradient-size', '50px');
    if(flag === 3) {
      setTimeout(renderLeftHiddenImages, 250);
    }
    sliderButtonNext.addEventListener('click', swipeLeft);
  }, 250);
}

function swipeRight() {
  sliderButtonPrevious.removeEventListener('click', swipeRight);
  slider.style.setProperty('--image-number', flag - 1);
  flag -= 1;
  sliderGradient.style.setProperty('--gradient-size-mobile', 0);
  sliderGradient.style.setProperty('--gradient-size', 0);
  setTimeout(() => {
    sliderGradient.style.setProperty('--gradient-url', `url("${sliderImages[flag].gradient}")`);
    sliderGradient.style.setProperty('--gradient-size-mobile', '35px');
    sliderGradient.style.setProperty('--gradient-size', '50px');
    if(flag === 0) {
      setTimeout(renderRightHiddenImages, 250);
    }
    sliderButtonPrevious.addEventListener('click', swipeRight);
  }, 250);
}

export default function initSlider() {
  sliderButtonNext.addEventListener('click', swipeLeft);
  sliderButtonPrevious.addEventListener('click', swipeRight);
}