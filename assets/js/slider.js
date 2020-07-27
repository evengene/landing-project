/*
JavaScript Portfolio Slideshow
*/

// Find HTML elements
const slideHTML = document.querySelector('.project-image');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');
const dots = document.querySelectorAll('.dot');
const cityText = document.querySelector('.city-text');
const areaText = document.querySelector('.area-text');
const repairText = document.querySelector('.repair-text');
const navigation = document.querySelectorAll('.navi');

// Slider object
const slides = [{
    index: 0,
    slide: './assets/images/slider/slider1.jpg',
    city: 'Rostov-on-Don LCD admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 month',
},
    {
        index: 1,
        slide: './assets/images/slider/slider2.jpg',
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 month',
        narrow: true,

    },
    {
        index: 2,
        slide: './assets/images/slider/slider3.jpg',
        city: 'Rostov-on-Don Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 month',
    }
];

// Define a variable for currently selected slide
let currentSlide = 0;

// Set click listener for arrow navigation
next.onclick = function () {
    currentSlide += 1;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    changeNavigation(currentSlide);
    changeDots(currentSlide);
    changeBg(currentSlide);
    changeText(currentSlide);
};

prev.onclick = function () {
    currentSlide -= 1;
    if (currentSlide === -1) {
        currentSlide = slides.length - 1;
    }
    changeNavigation(currentSlide);
    changeDots(currentSlide);
    changeBg(currentSlide);
    changeText(currentSlide);
};

// Set click listener for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        nextSlide(index);
        changeDots(index);
        changeNavigation(index);
    });
});

// Set click listener for navigation tabs
navigation.forEach((li, index) => {
    li.addEventListener('click', () => {
        nextSlide(index);
        changeNavigation(index);
        changeDots(index);
    });
});


function changeBg(index) {
    slideHTML.style.backgroundImage = `url(${slides[index].slide})`;
    slideHTML.style.transition = 'all 0.5s';
}

function changeText(index) {
    if (slides[index].narrow) {
        cityText.classList.add('narrow')
    } else {
        cityText.classList.remove('narrow')
    }

    cityText.innerHTML = slides[index].city;
    areaText.innerHTML = slides[index].apartmentArea;
    repairText.innerHTML = slides[index].repairTime;
}

function changeNavigation(index) {
    navigation.forEach((item) => {
        item.classList.remove('active')
    });
    navigation[index].classList.add('active');
}

function changeDots(index) {
    dots.forEach((item) => {
        item.classList.remove('active')
    });
    dots[index].classList.add('active');
}

function nextSlide(index) {
    currentSlide = index;
    if (index === slides.length) {
        index = 0;
    }
    changeBg(index);
    changeText(index);
}


// Code to work with responsive slider

let hiddenSlide = document.querySelector('.hidden-img');
const nextResp = document.querySelector('.slider-next');
const prevResp = document.querySelector('.slider-prev');

nextResp.addEventListener('click',
    () => {
        currentSlide += 1;
        if (currentSlide === slides.length) {
            currentSlide = 0;
        }
        changeRespBg(currentSlide);
        changeText(currentSlide);
    });


prevResp.onclick = function () {
    currentSlide -= 1;
    if (currentSlide === -1) {
        currentSlide = slides.length - 1;
    }
    changeRespBg(currentSlide);
    changeText(currentSlide);
};

function changeRespBg(index) {
    hiddenSlide.style.backgroundImage = `url(${slides[index].slide})`;
}