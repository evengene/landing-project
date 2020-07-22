// //slides [ {}, {}, {} ]
//
// // const empty = document.querySelector('')
//
// let slides = [
//
//         {
//             index: 0,
//             slide: './assets/images/slider/slider1.jpg',
//             city: 'Rostov-on-Don LCD admiral',
//             apartmentArea: '81 m2',
//             repairTime: '3.5 month',
//         },
//
//         {
//             index: 1,
//             slide: './assets/images/slider/slider2.jpg',
//             city: 'Sochi Thieves',
//             apartmentArea: '105 m2',
//             repairTime: '4 month',
//             narrow: true,
//
//         },
//
//         {
//             index: 2,
//             slide: './assets/images/slider/slider3.jpg',
//             city: 'Rostov-on-Don Patriotic',
//             apartmentArea: '93 m2',
//             repairTime: '3 month',
//         },
//     ],
//     currentIndex = 0;
//
//
// let slideHTML = document.querySelector('.project-image');
// const prev = document.querySelector('.arrow.left');
// const next = document.querySelector('.arrow.right');
//
// const cityText = document.querySelector('.city-text');
// const areaText = document.querySelector('.area-text');
// const repairText = document.querySelector('.repair-text');
//
//
//
//
// const dots = document.querySelectorAll('.dot');
//
// //дает индекс
// for (let i = 0; i < dots.length; i++) {
//     let dot = dots[i];
//     dot.addEventListener('click', () => {
//         changeBg(i);
//         changeText(i);
//     });
// }
//
//
// const navigation = document.querySelectorAll('.navi');
// navigation.forEach(element => {
//     element.addEventListener('click', () => {
//         let index = element.getAttribute('data-index'); // 0 1 2
//         changeBg(index);
//         changeText(index);
//     });
//
// });
//
//
//
//
// function changeBg(index) {
//     slideHTML.style.backgroundImage = `url(${slides[index].slide})`;
// }
//
// function changeText(index) {
//
//     if (slides[index].narrow) {
//
//         cityText.classList.add('narrow');
//
//     } else {
//         cityText.classList.remove('narrow')
//     }
//
//     cityText.innerHTML = slides[index].city;
//     areaText.innerHTML = slides[index].apartmentArea;
//     repairText.innerHTML = slides[index].repairTime;
//
//
// }
//
//
//
//
//
//
//
//
//
// next.onclick = function () {
//
//     currentIndex += 1;
//     if (currentIndex == slides.length) {
//         currentIndex = 0;
//     }
//     changeBg(currentIndex);
//     changeText(currentIndex);
//
// };
//
// prev.onclick = function () {
//     currentIndex -= 1;
//     if (currentIndex == -1) {
//         currentIndex = slides.length - 1;
//     }
//     changeBg(currentIndex);
//     changeText(currentIndex);
// };