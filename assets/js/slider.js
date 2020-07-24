//slides [ {}, {}, {} ]

let slides = [

        {
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
        },
    ],
    currentSlide = 0;

// Desktop
let slideHTML = document.querySelector('.project-image');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');
const dots = document.querySelectorAll('.dot');

const cityText = document.querySelector('.city-text');
const areaText = document.querySelector('.area-text');
const repairText = document.querySelector('.repair-text');

// Smart phone
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

function changeRespBg(index) {
    hiddenSlide.style.backgroundImage = `url(${slides[index].slide})`;
}/*


*/

//передадим индекс - наш номер слайда
function changeBg(index) {
    slideHTML.style.backgroundImage = `url(${slides[index].slide})`;

}
/* Text */
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

/* 1. Dots */

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        selectSlide(dots, dot, index);
    });
});

/* 2. Navigation Text */

let navigation = document.querySelectorAll('.navi');
navigation.forEach((element, index) =>
    element.addEventListener('click', () => {
        selectSlide(navigation, element, index);


        dots.forEach((array)=>{
            array.classList.remove('active');
        })

    }));




/* Arrows */
next.onclick = function () {
    currentSlide += 1;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    changeBg(currentSlide);
    changeText(currentSlide);

};

prev.onclick = function () {
    currentSlide -= 1;
    if (currentSlide === -1) {
        currentSlide = slides.length - 1;
    }
    changeBg(currentSlide);
    changeText(currentSlide);

};


//1) меняем статус
function showActiveSlide(array, arrayEl) {
    array.forEach((el) => {
        el.classList.remove('active')
    });
    arrayEl.classList.add('active');
}

//2) то что происходит onclick
function selectSlide(array, arrayEl, index) {
    showActiveSlide(array, arrayEl);
    currentSlide = index;
    console.log(index);
    nextSlide(array, arrayEl);
}

//3 меняем слайд
function nextSlide(array, arrayEl){
    currentSlide += 1;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    changeBg(currentSlide);
    changeText(currentSlide);
    showActiveSlide(array, arrayEl);

}
















