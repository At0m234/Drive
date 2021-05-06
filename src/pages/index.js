import './index.css';
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
  license,
  contactsSubtitle,
  header,
  headerLinks,
  headerLogo,
  logoHeaderImg,
  burgerPopup,
  contactsForm,
  contactsFormPopup,
  secondMainBgImgThree,
  secondMainBgImgSeven,
  secondMainBgArrows,
  teachersImages,
  consultPopupBtns,
  contactsPopup,
  undergroundImage,
  easyDriveString,
  mainFirstBg,
  mainSecondBg,
} from '../utils/constants';

// ФУНКЦИЯ ПРОВЕРКИ УТРОЙСТВА ПОЛЬЗОВАТЕЛЯ
let isMobile = () => {
  let data = navigator.userAgent.toLowerCase();

  if ((data.indexOf("Android".toLowerCase()) != -1) || (data.indexOf("IOS".toLowerCase()) != -1)) {
    return true
  } else {
    return false
  }
}

// БЛОК ДЕКЛАРАЦИИ ДЛЯ ЕДИНОРАЗОВОГО ВЫЗОВА ФУНКЦИЙ ОТРИСОВКИ КНОПОК ЛИЦЕНЗИЙ, КОНСУЛЬТАЦИИ И БУРГЕРНОГО МЕНЮ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ
let buttonAdditional = [false,false,false]

// ЦИКЛ ПЕРЕБОРА ФОТОГРАФИЙ ИНСТРУКТОРОВ
for (let i = 0; i < teachersImages.length; i++) {
  showTeacherExpierence(teachersImages[i])
}

// ФУНКЦИЯ ОТОБОРАЖЕНИЯ ФОНОВОГО СЛОЯ С ОПЫТОМ ИНСТРУКТОРА
function showTeacherExpierence(image) {
  image.addEventListener('mouseenter', () => {
    let teacherExpierence = image.querySelector('.guru__teacher-expearence')

    teacherExpierence.style.opacity = 1;
    teacherExpierence.style.visibility = "visible";
  })
  image.addEventListener('mouseleave', () => {
    let teacherExpierence = image.querySelector('.guru__teacher-expearence')

    teacherExpierence.style.opacity = 0;
    teacherExpierence.style.visibility = "hidden";
  })
}

// ЦИКЛ ДЛЯ ПЛАВНОГО СКРОЛА ПО ЯКОРНЫМ ССЫЛКАМ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('mousedown', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    let burgerMenuBtn = document.querySelector('.burger-menu__btn');
    popups[4].classList.remove('popup_visible');
    burgerMenuBtn ? burgerMenuBtn.classList.remove('burger-menu__btn_active') : null;
  });
// for (let anchor of anchors) {
//   anchor.addEventListener('mousedown', function (e) {
//     e.preventDefault();
//     const blockID = anchor.getAttribute('href').substring(1)
//     document.getElementById(blockID).scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
//     })
//     let burgerMenuBtn = document.querySelector('.burger-menu__btn');
//     popups[4].classList.remove('popup_visible');
//     burgerMenuBtn.classList.remove('burger-menu__btn_active');
//     burgerMenuBtn.style.position = "absolute";
//   })
// }
});

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
  // e.target.name.value = " ";
  // e.target.phone.value = " ";
}
// ОБРАБОТЧИК САБМИТА ФОРМЫ КОНСУЛЬТАЦИИ
function consultFormSubmitHandler(e) {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let phone = document.querySelector('#phone').value;
  const token = '1685594101:AAE_XcN8JKxhesOBuW6-e8M5IFsBHpdLQK8';
  const chatId = '-561913957';
  const txt = `Запрос о консультации:%0A <b>${name}</b>%0A <b>${phone}</b>`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`);
  e.target.name.value = "";
  e.target.phone.value = "";
  popups[3].classList.remove('popup_visible');
}


function popupConsultFormSubmitHandler(e) {
  e.preventDefault();
  let name = document.querySelector('#name-popup').value;
  let phone = document.querySelector('#phone-popup').value;
  const token = '1685594101:AAE_XcN8JKxhesOBuW6-e8M5IFsBHpdLQK8';
  const chatId = '-561913957';
  const txt = `Запрос о консультации:%0A <b>${name}</b>%0A <b>${phone}</b>`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`);
  e.target.name.value = "";
  e.target.phone.value = "";
  popups[3].classList.remove('popup_visible');
}

// ФУНКЦИЯ ДОБАВЛЕНИЯ БЛОКА С КНОПКАМИ: "ЛИЦЕНЗИЯ 1" И "ЛИЦЕНЗИЯ 2" ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileLicensesBtn() {
  if (!buttonAdditional[1]) {
    if (windowWidth < 768) {
      clubLicenseTitle.insertAdjacentHTML('afterend', `
      <div class="club__licenses">
        <button class="button button_type_license" id="license-one-btn">лицензия 1</button>
        <button class="button button_type_license" id="license-two-btn">лицензия 2</button>
      </div>
      `)
      let licenseOneBtn = document.querySelector('#license-one-btn');
      let licenseTwoBtn = document.querySelector('#license-two-btn');

      licenseOneBtn.addEventListener('mousedown', () => {
        openPopup(mobileLicenseOnePopup)
      })

      licenseTwoBtn.addEventListener('mousedown', () => {
        openPopup(mobileLicenseTwoPopup)
      })

    } else {
      clubLicenseTitle.insertAdjacentHTML('afterend', '');
    }
    buttonAdditional[1] = true
  }
}

addMobileLicensesBtn();

// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ ОТКРЫТИЯ ПОПАПА "КОНСУЛЬТАЦИИ" ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileConsultBtn() {
  if (!buttonAdditional[2]) {
    if (windowWidth < 768) {
      contactsForm.remove();

      contactsSubtitle.insertAdjacentHTML('afterend', `<button class="button button_type_consult-popup">Консультация</button>`);

      let consultBtn = document.querySelector('.button_type_consult-popup');

      consultBtn.addEventListener('mousedown', () => {
        openPopup(contactsPopup);
      })

    }
    buttonAdditional[2] = true
  }
}

addMobileConsultBtn();

// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ БУРГЕРНОГО МЕНЮ ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileBurger() {
  if (!buttonAdditional[0]) {
    if (windowWidth < 768) {
      headerLinks.remove();

      headerLogo.insertAdjacentHTML('afterend', `
      <button class="burger-menu__btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">
        <span></span>
      </button>
      `);

      let burgerMenuBtn = document.querySelector('.burger-menu__btn');

      burgerMenuBtn.addEventListener('mousedown', (e) => {
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

addMobileBurger();

const getEleme = (tag) => {
  return document.body.getElementsByClassName(tag)
}

function changeColor(elem, color, timing) {
  elem.style.transition =  timing +  "s linear";
  elem.style.color = color;
}

// АНИМАЦИЯ ПРИ НАВЕДЕНИИ КУРСОРА МЫШКИ НА ВТОРОЕ(ГРАДИЕНТНОЕ) ФОНОВОЕ ИЗОБРАЖЕНИЕ
mainSecondBg.onmouseenter = (e) => {
  mainFirstBg.classList.add("animation");
  // secondMainBgImgThree.classList.add("animated");
  // secondMainBgImgSeven.classList.add("animated");
  secondMainBgArrows.classList.add("animated-arrows");
  let elemes = document.body.getElementsByClassName("header__link");
  for(let a of elemes) {
    changeColor(a, "#181818", 0.5);
  }
  changeColor(getEleme("header__connection")[0], "#181818", 0.5);
  logoHeaderImg.style.opacity = 0;
}

// АНИМАЦИЯ ПРИ ОТВЕДЕНИИ КУРСОРА МЫШКИ СО ВТОРОГО(ГРАДИЕНТНОГО) ФОНОВОГО ИЗОБРАЖЕНИЯ
mainSecondBg.onmouseleave = (e) => {
  mainFirstBg.classList.remove("animation");
  // secondMainBgImgThree.classList.remove("animated");
  // secondMainBgImgSeven.classList.remove("animated");
  secondMainBgArrows.classList.remove("animated-arrows");
  let elemes = document.body.getElementsByClassName("header__link");
  for(let a of elemes) {
    changeColor(a, "#f8f8f8", 0.5);
  }
  changeColor(getEleme("header__connection")[0], "#FFF", 0.5);
  logoHeaderImg.style.opacity = 1;
}

// --------------------------------------------------- СКРИПТ ДЛЯ ДВИЖЕНИЯ ИЗОБРАЖЕНИЙ И ПОЯВЛЕНИЯ HEADER ПО СКРОЛУ ПО ОСИ Y --------------------------------------------------- //
// ЗАПИСЫВАЕМ НАЧАЛЬНОЕ ПОЛОЖЕНИЕ ПО ОСИ Y
let lastOffsetY = 0;

// ЗАДАЕМ НАЧАЛЬНОЕ ПОЛОЖЕНИЕ ДЛЯ ИЗОБРАЖЕНИЙ
undergroundImage.style.backgroundPosition = "0px 0px"
easyDriveString.style.backgroundPosition = "0px 0px"

// ПРОВЕРКА СКРОЛА ВНИЗ ИЛИ ВВЕРХ ПО ОСИ Y
const isScrollYIsUp = () => {
  if (lastOffsetY > window.pageYOffset) {
    lastOffsetY =  window.pageYOffset
    return true
  } else {
    lastOffsetY =  window.pageYOffset
    return false
  }
}

let mapMoveOnScroll = (element, size, rightMargin, leftMargin) => {
  let start = element.style.backgroundPosition
  let xS = start.split(' ')[0]
  let x = xS.substring(0, xS.length - 2)
  let yS = start.split(' ')[1]
  let y = yS.substring(0, yS.length - 2)
  let xN = x
  if ((rightMargin < (Number(x)+size) && size < 0)|| (leftMargin > (Number(x)+size) && size > 0)) {
    xN = (Number(x)+size)
  }
  element.style.backgroundPosition = String(xN)  + "px " + y + "px";
}
function isVisible(element1, element2){
  let getOffTop = element1.offsetTop + element2.offsetTop;
  if (getOffTop < pageYOffset + window.innerHeight)
  return true
  return false
}
function getSize(logic, size) {
  if (logic) {
    return size
  } else {
    return size *-1
  }
}

window.onscroll = (e) => {
  let scrollCheck = isScrollYIsUp();
  let rightMarg = (windowWidth / 100) * 47;
  let rightMargM = (windowWidth / 100) * 78;
  let speed = (windowWidth / 100);
  if (isVisible(document.getElementsByClassName("club__underground-image")[0], document.getElementsByClassName("club")[0])){
    if(isMobile()) {
      rightMargM = 430;
      mapMoveOnScroll(easyDriveString, getSize(scrollCheck, -1), -1200, 1200);
      mapMoveOnScroll(undergroundImage, getSize(scrollCheck, speed), -rightMargM, 0)
    } else {
      console.log(rightMarg);
      rightMarg = 400
      mapMoveOnScroll(easyDriveString, getSize(scrollCheck, -1), -1200, 1200);
      mapMoveOnScroll(undergroundImage, getSize(scrollCheck, speed), -rightMarg, 0)
    }
  }

  // УСЛОВИЕ ДЛЯ ОТОБРАЖЕНИЯ ХЕДЕРА ПО СКРОЛЛУ
  if (lastOffsetY > 700) {
    header.style.display = "none"
    header.style.position = 'fixed';
    header.style.display = "flex"
    header.style.transition = "all 500ms ease-out";
    header.style.opacity = "1";
    header.style.backgroundColor = "#181818";
  } else {
    header.style.display = "none"
    header.style.position = 'absolute';
    header.style.backgroundColor = "transparent";
    header.style.display = "flex"
  }
}
// --------------------------------------------------- СКРИПТ ДЛЯ ДВИЖЕНИЯ ИЗОБРАЖЕНИЙ И ПОЯВЛЕНИЯ HEADER ПО СКРОЛУ ПО ОСИ Y--------------------------------------------------- //

// ----------------------------------------------------------------------------- СЛУШАТЕЛИ СОБЫТИЙ ---------------------------------------------------------------------------- //

// СКРИПТ МАСКИ И ВАЛИДАЦИИ НОМЕРА ТЕЛЕФОНА ДЛЯ ФОРМЫ ЗАПРОСА НА КОНСУЛЬТАЦИЮ
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.querySelectorAll('.contacts__form-input'), function(input) {
  var keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function(a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function(a) {
        return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }
  if (input.id == "phone") {
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  }

  if (input.id == "phone-popup") {
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  }
  });
});

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

// СЛУШАТЕЛЬ КЛИКА НА ЖЕЛТЫЙ ТЕКСТ "ЛИЦЕНЗИИ"
license.addEventListener('mousedown', () => {
  if (windowWidth > 767) {
    openPopup(tebletComputerLicensesPopup)
  }
})

// ВЕШАЕМ СЛУШАТЕЛЬ ОТКРЫТИЯ ПОПАПА "КОНСУЛЬТАЦИИ" ПО КЛИКУ НА КНОПКИ
consultPopupBtns.forEach(button => {
  button.addEventListener('mousedown', () => {
    openPopup(contactsPopup);
  })
})

// ВЕШАЕМ СЛУШАТЕЛЬ САБМИТА НА ФОРМУ ЗАПРОСА О КОНСУЛЬТАЦИИ
contactsForm.addEventListener('submit', consultFormSubmitHandler);
contactsFormPopup.addEventListener('submit', popupConsultFormSubmitHandler);

// ВЕШАЕМ СЛУШАТЕЛЬ КЛИКА ИЛИ ТАЧА НА ЗАКРЫТИЕ ПОПАПА ЗАПРОСА НА КОНСУЛЬТАЦИЮ
contactsPopup.addEventListener('mousedown', closePopup);
contactsPopup.addEventListener('touchstart', closePopup);
contactsPopup.addEventListener('touchend', closePopup);

// ВЕШАЕМ СЛУШАТЕЛИ КЛИКА ИЛИ ТАЧА НА ЗАКРЫТИЕ ПОПАПОВ С ЛИЦЕНЗИЯМИ
tebletComputerLicensesPopup.addEventListener('mousedown', closePopup);

mobileLicenseOnePopup.addEventListener('mousedown', closePopup);
mobileLicenseOnePopup.addEventListener('touchstart', closePopup);
mobileLicenseOnePopup.addEventListener('touchend', closePopup);

mobileLicenseTwoPopup.addEventListener('mousedown', closePopup);
mobileLicenseTwoPopup.addEventListener('touchstart', closePopup);
mobileLicenseTwoPopup.addEventListener('touchend', closePopup);

// ДОБАВЛЯЕМ СЛУШАТЕЛЬ КНОПКЕ КАТЕГОРИЯ-A
ACatBtn.addEventListener('mousedown', () => {
  AContainer.classList.add('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
BCatBtn.addEventListener('mousedown', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.add('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
CCatBtn.addEventListener('mousedown', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.add('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
DCatBtn.addEventListener('mousedown', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.add('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
OnlyWithUsBtn.addEventListener('mousedown', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.add('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.remove('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
AdditionalClassesBtn.addEventListener('mousedown', () => {
  AContainer.classList.remove('prices__A-container_visible');
  BContainer.classList.remove('prices__B-container_visible');
  CContainer.classList.remove('prices__C-container_visible');
  DContainer.classList.remove('prices__D-container_visible');
  OnlyWithUsContainer.classList.remove('prices__only-with-us-container_visible');
  AdditionalClassesContainer.classList.add('prices__additional-classes-container_visible');
  // МЕНЯЕМ ВЫСОТУ БЛОКА С ВЫБОРОМ ТАРИФОВ ПО СООТВЕТСТВУЮЩИМ КАТЕГОРИЯМ
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
