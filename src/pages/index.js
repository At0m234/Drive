import './index.css';
import '../utils/parallax.js'
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
  headerLinks,
  headerLogo,
  burgerPopup,
  burgerLinks,
  burgerMenuBtn,
  contactsForm,
  anchors,
  formInputs
} from '../utils/constants';


// function showTeachersExpearence() {
//   let teacherExpearence = document.querySelectorAll('.guru__teacher-expearence');
//   let teachersImages = document.querySelectorAll('.guru__teacher-image');
//   console.log(teachersImages);
//   teachersImages.onmouseenter = (e) => {
//     console.log('xxx')
//     teacherExpearence.style.opacity = 1;
//     teacherExpearence.style.visibility = 'visible';
//   }
//   for (var i = 0; i < teachersImages.length; i++) {
//     teachersImages[i].addEventListener('click', () => {
//       teacherExpearence.style.opacity = 1;
//       teacherExpearence.style.visibility = 'visible';
//     });
//   }
// }
// showTeachersExpearence();

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

    // console.log(popups);
    // for(let i; i < popups.length; i++){
    //   popups[i].classList.remove('popup_visible');
    // }
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
function addMobileLicensesBtns() {
  if (windowWidth < 768) {
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
}

addMobileLicensesBtns();

// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ ОТКРЫТИЯ ПОПАПА "КОНСУЛЬТАЦИИ" ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileConsultBtn() {
  if (windowWidth < 768) {
    contactsForm.remove();

    contactsSubtitle.insertAdjacentHTML('afterend', `<button class="button button_type_consult-popup">Консультация</button>`)
    let consultBtn = document.querySelector('.button_type_consult-popup');

    consultBtn.addEventListener('click', () => {
      openPopup(consultPopup);
    })

    let contactsFormPopup = document.querySelector('#contacts-form-popup');
    contactsFormPopup.addEventListener('submit', consultFormSubmitHandler);
  }
}

addMobileConsultBtn();

// ФУНКЦИЯ ДОБАВЛЕНИЯ КНОПКИ БУРГЕРНОГО МЕНЮ ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768PX
function addMobileBurger() {
  if (windowWidth < 768) {
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
  }
}

addMobileBurger();


document.body.getElementsByClassName("main__bg-second")[0].onmouseenter = (e) => {
  document.getElementsByClassName("main__bg-first")[0].classList.add("margin-class");
}

document.body.getElementsByClassName("main__bg-second")[0].onmouseleave = (e) => {
  document.getElementsByClassName("main__bg-first")[0].classList.remove("margin-class");
}


// ---------------------------------СЛУШАТЕЛИ СОБЫТИЙ--------------------------------- //

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

