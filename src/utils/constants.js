export const windowWidth = window.addEventListener('resize', () => {
  let displayWidth = window.innerWidth;
  return displayWidth;
});
// ЗАПИСЫВАЕМ БЛОКИ С КАТЕГОРИЯМИ В СООТВЕТСТВУЮЩИЕ ПЕРЕМЕННЫЕ
export const AContainer = document.querySelector('.prices__A-container');
export const BContainer = document.querySelector('.prices__B-container');
export const CContainer = document.querySelector('.prices__C-container');
export const DContainer = document.querySelector('.prices__D-container');
export const OnlyWithUsContainer = document.querySelector('.prices__only-with-us-container');
export const AdditionalClassesContainer = document.querySelector('.prices__additional-classes-container');
// ЗАПИСЫВАЕМ КНОПКИ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ КАТЕГОРИЯМИ
export const ACatBtn = document.querySelector('#A-btn');
export const BCatBtn = document.querySelector('#B-btn');
export const CCatBtn = document.querySelector('#C-btn');
export const DCatBtn = document.querySelector('#D-btn');
export const OnlyWithUsBtn = document.querySelector('#Only-with-us-btn');
export const AdditionalClassesBtn = document.querySelector('#Additional-classes-btn');

export const pricesInfo = document.querySelector('.prices__info');


export const clubLicenseTitle = document.querySelector('.club__license-title');

export const popups = document.querySelectorAll('.popup');
export const tebletComputerLicensesPopup = document.querySelector('#tablet-computer-licenses');
export const mobileLicenseOnePopup = document.querySelector('#mobile-license-one');
export const mobileLicenseTwoPopup = document.querySelector('#mobile-license-two');
export const consultPopup = document.querySelector('#consult-popup');

export const license = document.querySelector('#license');

export const contactsSubtitle = document.querySelector('.contacts__subtitle');

export const headerLinks = document.querySelector('.header__links');
export const headerLogo = document.querySelector('.logo_type_header');

export const burgerPopup = document.querySelector('#burger-popup');

export const contactsForm = document.querySelector('#contacts-form');
export const anchors = document.querySelectorAll('.header__link');
export const formInputs = document.querySelectorAll('.contacts__form-input');

export const secondMainBgImgThree = document.querySelector('.main__image_type_three');
export const secondMainBgImgSeven = document.querySelector('.main__image_type_seven');
export const secondMainBgArrows = document.querySelector('.main__image_type_arrows');