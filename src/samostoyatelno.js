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
    currentIndex = 0;

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
    ()=> {
        currentIndex +=1;
        if (currentIndex === slides.length) {
            currentIndex = 0;
        }
        changeRespBg(currentIndex);
        changeText(currentIndex);

    });


function changeRespBg(index) {
    hiddenSlide.style.backgroundImage = `url(${slides[index].slide})`;
}




/* Arrows */

//передадим индекс - наш номер слайда
function changeBg(index) {
    slideHTML.style.backgroundImage = `url(${slides[index].slide})`;

}
next.onclick = function () {
  currentIndex +=1;
  if (currentIndex === slides.length) {
      currentIndex = 0;
  }
  changeBg(currentIndex);
  changeText(currentIndex);

    // slides[currentIndex].status = 'active';

};

prev.onclick = function () {
  currentIndex -= 1;
  if (currentIndex === -1) {
      currentIndex = slides.length-1;
  }
  changeBg(currentIndex);
  changeText(currentIndex);

};

/* Dots */

dots.forEach((dot, index) => {
    dot.addEventListener('click', ()=> {
        removeActiveClass(dots);
        dot.classList.add('active');
        changeBg(index);
        changeText(index);

    });
});


//class Active, + -

function removeActiveClass (div) {
    div.forEach((el) => {
        el.classList.remove('active')
    });
}

/* Text */

function changeText(index) {
    if (slides[index].narrow) {
        cityText.classList.add('narrow')
    }
 else {
        cityText.classList.remove('narrow')
    }

    cityText.innerHTML = slides[index].city;
    areaText.innerHTML = slides[index].apartmentArea;
    repairText.innerHTML = slides[index].repairTime;
}

/* Navigation Text */

let navigation = document.querySelectorAll('.navi');
navigation.forEach((element)=>
    element.addEventListener('click',  ()=> {
        removeActiveClass(navigation);
        element.classList.add('active');
        let indexNumber = element.getAttribute('data-index');
        changeBg(indexNumber);
        changeText(indexNumber);
    }));
