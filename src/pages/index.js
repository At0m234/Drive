import './index.css';
// import '../utils/parallax.js';

import {
  windowWidth,
  AContainer,
  BContainer,
  CContainer,
  DContainer,
  OnlyWithUsContainer,
  AdditionalClassesContainer,
  ACatBtn,
  BCatBtn,
  CCatBtn,
  DCatBtn,
  OnlyWithUsBtn,
  AdditionalClassesBtn,
  pricesInfo,
  clubLicenseTitle,
  popups,
  tebletComputerLicensesPopup,
  mobileLicenseOnePopup,
  mobileLicenseTwoPopup,
  consultPopup,
  license,
  contactsSubtitle,
  header,
  headerLinks,
  headerLogo,
  burgerPopup,
  contactsForm,
  anchors,
  formInputs,
  secondMainBgImgThree,
  secondMainBgImgSeven,
  secondMainBgArrows,
} from '../utils/constants';

let isMobile = () => {
  let data = navigator.userAgent.toLowerCase();

  if ((data.indexOf("Android".toLowerCase()) != -1) || (data.indexOf("IOS".toLowerCase()) != -1)){
    return true
  } else {
    return false
  }
}


// БЛОК ДЕКЛАРАЦИИ
let buttonAdditional = [false,false,false]

// ЦИКЛ ДЛЯ ПЛАВНОГО СКРОЛА ПО ЯКОРНЫМ ССЫЛКАМ
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1)

      document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
      })

      let burgerMenuBtn = document.querySelector('.burger-menu__btn');

      popups[4].classList.remove('popup_visible');
      burgerMenuBtn.classList.remove('burger-menu__btn_active');
      burgerMenuBtn.style.position = "absolute";
  })
}

// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПОВ
function openPopup(popup) {
  popup.classList.add('popup_visible');
}

// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
function closePopup(e) {
  if((e.target.classList.contains('popup') || e.target.classList.contains('popup__cross') || (e.key === 'Escape'))) {
    popups[0].classList.remove('popup_visible');
    popups[1].classList.remove('popup_visible');
    popups[2].classList.remove('popup_visible');
    popups[3].classList.remove('popup_visible');
    popups[4].classList.remove('popup_visible');
  }
}

// ОБРАБОТЧИК САБМИТА ФОРМЫ КОНСУЛЬТАЦИИ
function consultFormSubmitHandler(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const token = '1685594101:AAE_XcN8JKxhesOBuW6-e8M5IFsBHpdLQK8';
  const chatId = '-561913957';
  const txt = `Запрос о консультации:%0A <b>${name}</b>%0A <b>${phone}</b>`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`);
  popups[3].classList.remove('popup_visible');
}

// ФУНКЦИЯ ДОБАВЛЕНИЯ БЛОКА С КНОПКАМИ: "ЛИЦЕНЗИЯ 1" И "ЛИЦЕНЗИЯ 2" ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileLicensesBtn () {
  if (!buttonAdditional[1]) {
    if (isMobile()) {
      clubLicenseTitle.insertAdjacentHTML('afterend', `
      <div class="club__licenses">
        <button class="button button_type_license" id="license-one-btn">лицензия 1</button>
        <button class="button button_type_license" id="license-two-btn">лицензия 2</button>
      </div>
      `)
      let licenseOneBtn = document.querySelector('#license-one-btn');
      let licenseTwoBtn = document.querySelector('#license-two-btn');

      licenseOneBtn.addEventListener('click', () => {
        openPopup(mobileLicenseOnePopup)
      })

      licenseTwoBtn.addEventListener('click', () => {
        openPopup(mobileLicenseTwoPopup)
      })

    } else {
      clubLicenseTitle.insertAdjacentHTML('afterend', '');
    }
    buttonAdditional[1] = true
  }
}


// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ ОТКРЫТИЯ ПОПАПА "КОНСУЛЬТАЦИИ" ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileConsultBtn () {
  if (!buttonAdditional[2]) {
    if (isMobile()) {
    contactsForm.remove();

    contactsSubtitle.insertAdjacentHTML('afterend', `<button class="button button_type_consult-popup">Консультация</button>`)
    let consultBtn = document.querySelector('.button_type_consult-popup');

    consultBtn.addEventListener('click', () => {
      openPopup(consultPopup);
    })

    let contactsFormPopup = document.querySelector('#contacts-form-popup');
    contactsFormPopup.addEventListener('submit', consultFormSubmitHandler);
    }
    buttonAdditional[2] = true
  }
}


// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ БУРГЕРНОГО МЕНЮ ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileBurger() {
  if (!buttonAdditional[0]) {
    if (isMobile()) {
      headerLinks.remove();

      headerLogo.insertAdjacentHTML('afterend', `
      <button class="burger-menu__btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">
        <span></span>
      </button>
      `);

      let burgerMenuBtn = document.querySelector('.burger-menu__btn');

      burgerMenuBtn.addEventListener('click', (e) => {
        burgerMenuBtn.classList.add('burger-menu__btn_active');
        burgerMenuBtn.style.position = "fixed";
        burgerPopup.classList.add('popup_visible');
      })
      window.addEventListener('touchend', (e) => {
        if ((e.target.classList.contains('popup'))) {
          burgerMenuBtn.classList.remove('burger-menu__btn_active');
          burgerPopup.classList.remove('popup_visible');
          burgerMenuBtn.style.position = "absolute";
        }
      })
      buttonAdditional[0] = true
    }
  }
}
let elemes = document.body.getElementsByClassName("header__link")
for(var a of elemes){
  a.style.fontSize = "12px"
}
const getEleme = (sukaTag) => {
  return document.body.getElementsByClassName(sukaTag)
}
document.body.getElementsByClassName("main__bg-second")[0].onmouseenter = (e) => {
  document.getElementsByClassName("main__bg-first")[0].classList.add("animation");
  secondMainBgImgThree.classList.add("animated");
  secondMainBgImgSeven.classList.add("animated");
  secondMainBgArrows.classList.add("animated-arrows");
  let elemes = document.body.getElementsByClassName("header__link")
  for(var a of elemes){
    changeColor(a, "#181818", 0.5);
  }
  changeColor(getEleme("header__connection")[0], "#181818", 0.5)

}
function changeColor(elem, color, timing){
  elem.style.transition =  timing +  "s linear"
  elem.style.color = color
}
document.body.getElementsByClassName("main__bg-second")[0].onmouseleave = (e) => {
  document.getElementsByClassName("main__bg-first")[0].classList.remove("animation");
  secondMainBgImgThree.classList.remove("animated");
  secondMainBgImgSeven.classList.remove("animated");
  secondMainBgArrows.classList.remove("animated-arrows");
  let elemes = document.body.getElementsByClassName("header__link")
  for(var a of elemes){
    changeColor(a, "#f8f8f8", 0.5);
  }
  changeColor(getEleme("header__connection")[0], "#FFF", 1)
}


var lastOffsetY = 0;

document.body.getElementsByClassName("club__underground-svg")[0].style.backgroundPosition = "0px 0px"
document.body.getElementsByClassName("club__background-string")[0].style.backgroundPosition = "0px 0px"



const isUp = () => {
  if (lastOffsetY > window.pageYOffset)
  {
    lastOffsetY =  window.pageYOffset
    return true
  }
  else
  {
    lastOffsetY =  window.pageYOffset
    return false
  }
}
let mapMoveOnScroll = (element, size,rightMarg, leftMarg) => {
  let start = element.style.backgroundPosition
  let xS = start.split(' ')[0]
  let x = xS.substring(0, xS.length - 2)
  let yS = start.split(' ')[1]
  let y = yS.substring(0, yS.length - 2)
  let xN = x
  if ((rightMarg < (Number(x)+size) && size < 0)|| (leftMarg > (Number(x)+size) && size > 0)){
    xN = (Number(x)+size)
  }
  element.style.backgroundPosition = String(xN)  + "px " + y + "px";
}

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
function getSize(logic , size){
  if (logic) {
    return size
  }
  else
  {
    return size *-1
  }
}

// ---------------------------------СЛУШАТЕЛИ СОБЫТИЙ--------------------------------- //

window.onscroll = (e) => {
  let scrollCheck = isUp();

  mapMoveOnScroll(document.body.getElementsByClassName("club__background-string")[0], getSize(scrollCheck, -1), -1200, 1200);
  mapMoveOnScroll(document.body.getElementsByClassName("club__underground-svg")[0], getSize(scrollCheck, 1), -850, 0);

  if (lastOffsetY > 700) {
    header.style.display = "none"
    header.style.position = 'fixed';
    header.style.display = "flex"
    header.style.transition = "all 1500ms ease-out .5s";
    header.style.opacity = "1";
    header.style.backgroundColor = "#181818";
  } else {
    header.style.display = "none"
    header.style.position = 'absolute';
    header.style.backgroundColor = "transparent";
    header.style.display = "flex"
  }
}

window.addEventListener('load', () => {
  addMobileLicensesBtn();
  addMobileConsultBtn();
  addMobileBurger();
})

window.addEventListener('rezise', () => {
  addMobileLicensesBtn();
  addMobileConsultBtn();
  addMobileBurger();
})

window.addEventListener('orientationchange', () => {
  addMobileLicensesBtn();
  addMobileConsultBtn();
  addMobileBurger();
})

window.addEventListener('click', closePopup);
window.addEventListener('touchstart', closePopup);
window.addEventListener('touchend', closePopup);
window.addEventListener('keydown', closePopup);

contactsForm.addEventListener('submit', consultFormSubmitHandler);

formInputs[1].addEventListener('click', () => {
  formInputs[1].value = '+7';
})

formInputs[3].addEventListener('click', () => {
  formInputs[3].value = '+7';
})

license.addEventListener('click', () => {
  if (windowWidth > 767) {
    openPopup(tebletComputerLicensesPopup)
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ КАТЕГОРИЯ-A
ACatBtn.addEventListener('click', () => {
  AContainer.classList.add('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 512 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 626 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ КАТЕГОРИЯ-B
BCatBtn.addEventListener('click', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.add('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 512 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 697 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ КАТЕГОРИЯ-C
CCatBtn.addEventListener('click', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.add('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 238 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 130 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ КАТЕГОРИЯ-D
DCatBtn.addEventListener('click', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.add('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 238 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 130 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ 'ТОЛЬКО У НАС'
OnlyWithUsBtn.addEventListener('click', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.add('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 518 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 645 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ 'ДОП.ЗАНЯТИЯ'
AdditionalClassesBtn.addEventListener('click', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.add('prices__additional-classes-container_visible');
  if (windowWidth > 1365) {
    pricesInfo.style.height = 452 + 'px';
  }
  if (windowWidth > 767 && windowWidth < 1366) {
    pricesInfo.style.height = 533 + 'px';
  }
  if (windowWidth < 768 ) {
    pricesInfo.style.height = 415 + 'px';
  }
})

