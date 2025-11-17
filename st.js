const translations = {
    en: {
        navFeatures: "Features",
        navUpdates: "Real-time updates",
        navAbout: "About us",
        mainHeading: "Powerful Platform To Organize Your Workforce",
        heading: "Empower your HR team with seamless attendance tracking, shift scheduling, and productivity insights - all in one intiutive platform.",
        getDemo: "Get Demo",
        
    },

    ru: {
        navFeatures: "Функции",
        navUpdates: "Обновления",
        navAbout: "О нас",
        mainHeading: "Мощная платформа для организации вашей команды",
        heading: "Дайте вашей HR-команде возможность эффективно управлять посещаемостью, графиками смен и аналитикой продуктивности — всё в одной интуитивно понятной платформе.",
        getDemo: "Получить Demo",
                                 
    }
};


const updateContent = (selectedLang) => {
    const languageSwitcher = document.getElementById('languageSwitcher');
    const navFeatures = document.getElementById('navFeatures');
    const navUpdates = document.getElementById('navUpdates');
    const navAbout = document.getElementById('navAbout');
    const navFeatures1 = document.getElementById('navFeatures1');
    const navUpdates1 = document.getElementById('navUpdates1');
    const navAbout1 = document.getElementById('navAbout1');

    const mainHeading = document.getElementById('mainHeading');
    const heading = document.getElementById('heading');
    const getDemo = document.getElementById('getDemo');
    const getDemo1 = document.getElementById('getDemo1');
    




    navFeatures.textContent = translations[selectedLang].navFeatures;
    navUpdates.textContent = translations[selectedLang].navUpdates;
    navAbout.textContent = translations[selectedLang].navAbout;
    navFeatures1.textContent = translations[selectedLang].navFeatures;
    navUpdates1.textContent = translations[selectedLang].navUpdates;
    navAbout1.textContent = translations[selectedLang].navAbout;

    mainHeading.textContent = translations[selectedLang].mainHeading;
    heading.textContent = translations[selectedLang].heading;
    getDemo.textContent = translations[selectedLang].getDemo;
    getDemo1.textContent = translations[selectedLang].getDemo;

    
};

const handleLanguageChange = (switcherId, optionsId, selectedLanguageId) => {
    document.getElementById(selectedLanguageId).addEventListener('click', function() {
        document.getElementById(optionsId).classList.toggle('hidden');
    });

    document.querySelectorAll(`#${optionsId} a`).forEach(function(option) {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            const selectedFlag = option.querySelector('img').src;
            const selectedText = option.querySelector('span').textContent;

            document.getElementById(selectedLanguageId).innerHTML = `
                <div class="rounded-full bg-[#0A0A0A] flex items-center text-white h-full px-[16px] gap-[10px]">
                    <span class="uppercase">${selectedLang} </span>
                    <img src="${selectedFlag}" alt="${selectedLang} Flag" class="flag w-6 h-6">
                    <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
                </div>
            `;

            updateContent(selectedLang);

            document.getElementById(optionsId).classList.add('hidden');
        });
    });
};

// Initialize switchers
handleLanguageChange('desktopLanguageSwitcher', 'languageOptionsDesktop', 'selectedLanguageDesktop');
handleLanguageChange('mobileLanguageSwitcher', 'languageOptionsMobile', 'selectedLanguageMobile');

// Set default language
const defaultLanguage = 'ru';
const defaultFlag = 'img/ru.svg';
document.getElementById('selectedLanguageDesktop').innerHTML = `
    <div class="rounded-full bg-[#0A0A0A] flex items-center text-white h-full px-[16px] gap-[10px]">
        <span class="uppercase">${defaultLanguage} </span>
        <img src="${defaultFlag}" alt="${defaultLanguage} Flag" class="flag w-6 h-6">
        <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
    </div>
    
`;
document.getElementById('selectedLanguageMobile').innerHTML = `
    <img src="${defaultFlag}" alt="${defaultLanguage} Flag" class="flag w-6 h-6">
`;
updateContent(defaultLanguage);



var nav = document.getElementById('nav');
var newDate = new Date();
var year = newDate.getUTCFullYear();

document.getElementById("year").innerHTML = year;

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 140 || document.documentElement.scrollTop >= 140) {
        nav.classList.add("bg-white", "opacity-95", "transition", "duration-700", "ease-in-out");
        nav.classList.remove("bg-transparent");
    } 
    else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white", "opacity-95");
    }
};

function openMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'block';
    document.getElementById('openIcon').style.display = 'none';
    document.getElementById('closeIcon').style.display = 'block';
    navMobile.classList.add("bg-[#0D0C0E]");
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'none';
    document.getElementById('openIcon').style.display = 'block';
    document.getElementById('closeIcon').style.display = 'none';
    navMobile.classList.remove("bg-[#0D0C0E]");
}

// Activ for nav elements
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-item');
    const navLinksMob = document.querySelectorAll('.nav-item-mob');
    const sections = document.querySelectorAll('section'); 

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');

        navLinksMob.forEach((link) => link.classList.remove('active'));
        navLinksMob[index].classList.add('active');
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});


var newDate = new Date();
var year = newDate.getUTCFullYear();

document.getElementById("year").innerHTML = year;
