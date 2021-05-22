// ЗАПИСЫВАЕМ ШИРИНУ ЭКРАНА В ПЕРЕМЕННУЮ
export const windowWidth = window.innerWidth;
// ЗАПИСЫВАЕМ КНОПКИ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ КАТЕГОРИЯМИ
export const ACatBtn = document.querySelector('#A-btn');
export const BCatBtn = document.querySelector('#B-btn');
export const CCatBtn = document.querySelector('#C-btn');
export const DCatBtn = document.querySelector('#D-btn');
export const OnlyWithUsBtn = document.querySelector('#Only-with-us-btn');
export const AdditionalClassesBtn = document.querySelector('#Additional-classes-btn');

// ЗАПИСЫВАЕМ БЛОКИ С ТАРИФАМИ ПО КАТЕГОРИЯМ В ПЕРЕМЕННЫЕ
export const pricesBlock = document.querySelector(".prices__categories-choise");
export const pricesInfo = document.querySelector('.prices__info');
export const AContainer = document.querySelector('.prices__A-container');
export const BContainer = document.querySelector('.prices__B-container');
export const CContainer = document.querySelector('.prices__C-container');
export const DContainer = document.querySelector('.prices__D-container');
export const OnlyWithUsContainer = document.querySelector('.prices__only-with-us-container');
export const AdditionalClassesContainer = document.querySelector('.prices__additional-classes-container');

// КНОПКИ, ОТРЫВАЮЩИЕ ПОПАПЫ
export const consultPopupBtns = document.querySelectorAll('.button_type_consult-form');
export const license = document.querySelector('#license');

// ПОПАПЫ
export const popups = document.querySelectorAll('.popup');
export const tebletComputerLicensesPopup = document.querySelector('#tablet-computer-licenses');
export const mobileLicenseOnePopup = document.querySelector('#mobile-license-one');
export const mobileLicenseTwoPopup = document.querySelector('#mobile-license-two');
export const contactsPopup = document.querySelector('#contacts-popup');
export const burgerPopup = document.querySelector('#burger-popup');

// Header
export const header = document.querySelector('.header');
export const headerLinks = document.querySelector('.header__links');
export const headerLogo = document.querySelector('.logo_type_header');
export const logo = document.querySelector('.logo');
export const logoHeaderImg = logo.querySelector('img');

// Main
export const mainFirstBg = document.querySelector('.main__bg-first');
export const mainSecondBg = document.querySelector('.main__bg-second');
export const secondMainBgImgThree = document.querySelector('.main__image_type_three');
export const secondMainBgImgSeven = document.querySelector('.main__image_type_seven');
export const secondMainBgArrows = document.querySelector('.main__image_type_arrows');

// Forms ФОРМЫ ДЛЯ ОПРАВКИ ЗАПРОСА НА КОНСУЛЬТАЦИЮ
export const contactsForm = document.querySelector('#contacts-form');
export const contactsFormPopup = document.querySelector('#contacts-form-popup');


export const clubLicenseTitle = document.querySelector('.club__license-title');
export const contactsSubtitle = document.querySelector('.contacts__subtitle');
export const teachersImages = document.querySelectorAll('.guru__teacher');
export const undergroundImage = document.querySelector(".club__underground-svg");
export const easyDriveString = document.querySelector(".club__background-string");
