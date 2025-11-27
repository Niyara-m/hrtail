// Получаем домен сайта
const domain = window.location.hostname.replace('www.', '');

// по умолчанию
let companyName = 'Shif2'; 
let appURL = 'https://app.shif2.com'; // кнопка войти

if (domain === 'shif2.com') {
    companyName = 'Shif2';
    appURL = 'https://app.shif2.com';
} else if (domain === 'hrtail.com') {
    companyName = 'HRtail';
    appURL = 'https://app.hrtail.com';
}

const applyCompanyName = () => {
    document.querySelectorAll('.companyName').forEach(el => {
        el.textContent = companyName;
    });
};

document.title = document.title.replace(/HR\.?tail|HR Tail|HRtail|Shif2/i, companyName);

// Находим кнопку и вешаем обработчик
document.querySelectorAll('.loginButton').forEach(button => {
    button.addEventListener('click', () => {
        window.open(appURL, '_blank');
    });
});


const translations = {
    en: {
        navFeatures: "Features",
        navUpdates: "Real-time updates",
        navAbout: "About us",
        mainHeading: "Powerful Platform To Organize Your Workforce",
        heading: "Empower your HR team with seamless attendance tracking, shift scheduling, and productivity insights - all in one intiutive platform.",
        getDemo: "Get Demo",
        aboutTitle: "ABOUT US",
        aboutSubtitle:  `We Help Companies work <span class="bg-gradient-to-r from-[#00B2FF] to-[#008AD4] text-transparent bg-clip-text">smarter</span>, Not harder.`,
        missionTitle: "Our Mission",
        missionText1: "We’re on a mission to make digital experiences effortless and meaningful.",
        missionText2: "Through thoughtful design, we turn complex ideas into simple, intuitive, and beautiful interfaces that connect people with products they love.",
        missionText3: "Our focus is on usability, emotion, and detail — because great design isn’t just how it looks, it’s how it feels and works.",
        readMore: "Read More",
        // Our Features block
        featuresTitle: "Our Features",
        featuresSubtitle: "Smart Scheduling.",
        featuresText: "Take the guesswork out of planning your team’s day. Our smart scheduling system automatically organizes shifts, meetings, and tasks based on team availability and priorities. You can easily drag, adjust, and optimize schedules in real time — making sure every hour is used efficiently. Whether you’re managing a small team or an entire department, scheduling becomes simple, fast, and stress-free.",
        viewAll: "VIEW ALL",
        shiftOptimization: "Shift Optimization",
        shiftText: "Easily organize and assign shifts for your entire team with just a few clicks.",
        shiftText2: "Easily organize and assign shifts for your entire team with just a few clicks.",
        openShiftManagement: "Open Shift Management",
        // Time Tracking block
        timeTrackingTitle: "Time Tracking",
        timeTrackingText: "Take the guesswork out of tracking employee hours. Our system automatically captures work time, organizes schedules, and gives HR real-time visibility into team activity.",
        timeTrackingPoint1: "1. Automated clock-ins, error detection, and precise hour logs.",
        timeTrackingPoint2: "2. Optimize shifts based on availability, workload, and staffing needs.",
        timeTrackingPoint3: "3. Real-time reports on overtime, absences, and productivity trends.",
        // Payroll Management
        payrollHeading: "Effortless Payroll Management",
        payrollSubheading: "Payroll management",
        payrollText: "Our smart payroll system automatically calculates salaries, overtime, and deductions based on tracked work hours and approvals. No more spreadsheets or manual corrections — everything is synced and accurate in real time. You can review, adjust, and confirm payouts with just a few clicks. Whether your team is on-site or remote, payroll processing becomes fast, transparent, and completely hassle-free.",
        payrollSummary: "Payroll Summary",
        payrollSummaryPeriod: "From 1-31 October, 2025",
        payrollSummaryViewReport: "View report",
        payrollPayment: "Payment",
        payrollPaymentPending: "Pending",
        payrollPaymentPaid: "Paid",
        // Ready To Get Started?
        ctaHeading: "Ready To Get Started?",
        ctaText: `See how <span class="companyName">HR Tail</span> can simplify scheduling, tracking, and team management — all in one place.`,
        ctaEmailPlaceholder: "Your email",
        ctaButton: "Get Demo",
        // footer
        footerTextMain: `<p><span class="companyName">HR Tail</span> provides reliable solutions for workforce scheduling,</p>
							<p>attendance tracking, and payroll management. </p>
							<p>Built for businesses that value efficiency, clarity, and growth. </p>`,
        footerAboutTitle: "About us",
        footerTrustedBy: "Trusted By",
        footerContacts: "Contacts",
        footerFeaturesTitle: "Features",
        footerSmartScheduling: "Smart Scheduling",
        footerTimeTracking: "Time Tracking",
        footerPayrollManagement: "Payroll Management",
        footerUpdatesTitle: "Real-time updates",
        footerChangelog: "Changelog",
        footerRights: "All rights reserved.",
        footerTerms: "Terms of Service",
        footerPrivacy: "Privacy Policy",
        mobilePhone: "Phone no.",
        mobileQuickLinks: "Quick links",
        mobileFeatures: "Features",
        mobileRealTime: "Real-time Updates",
        mobileAboutUs: "About us",
        mobileTerms: "Terms of Service",
        mobilePrivacy: "Privacy policy",
        mobileRights: "All rights reserved.",
        loginText: "Login",
        loginText2: "Login",
    },

    ru: {
        navFeatures: "Функции",
        navUpdates: "Учёт времени",
        navAbout: "О нас",
        mainHeading: "Мощная платформа для организации вашей команды",
        heading: "Дайте вашей HR-команде возможность эффективно управлять посещаемостью, графиками смен и аналитикой продуктивности — всё в одной интуитивно понятной платформе.",
        getDemo: "Получить Demo",
        aboutTitle: "О нас",
        aboutSubtitle: `Мы помогаем компаниям работать <span class="bg-gradient-to-r from-[#00B2FF] to-[#008AD4] text-transparent bg-clip-text">умнее</span>, а не усерднее.`,
        missionTitle: "Наша Миссия",
        missionText1: "Мы стремимся сделать цифровой опыт простым и значимым.",
        missionText2: "Благодаря продуманному дизайну мы превращаем сложные идеи в простые, интуитивно понятные и красивые интерфейсы, которые соединяют людей с продуктами, которые они любят.",
        missionText3: "Наш фокус — на удобстве, эмоциях и деталях, потому что великий дизайн — это не только внешний вид, но и ощущения, и функциональность.",
        readMore: "Читать далее",
        // Our Features block
        featuresTitle: "Наши функции",
        featuresSubtitle: "Умное планирование",
        featuresText: "Забудьте о догадках при планировании дня вашей команды. Наша система умного планирования автоматически организует смены, встречи и задачи с учётом доступности команды и приоритетов. Вы можете легко перетаскивать, настраивать и оптимизировать расписание в реальном времени — чтобы каждый час использовался эффективно. Независимо от того, управляете ли вы небольшой командой или целым отделом, планирование становится простым, быстрым и без стрессов.",
        viewAll: "ПОСМОТРЕТЬ ВСЁ",
        shiftOptimization: "Оптимизация смен",
        shiftText: "Легко организуйте и назначайте смены для всей вашей команды всего за несколько кликов.",
        shiftText2: "Легко организуйте и назначайте смены для всей вашей команды всего за несколько кликов.",
        openShiftManagement: "Открыть управление сменами",
        // Time Tracking block
        timeTrackingTitle: "Учёт времени",
        timeTrackingText: "Забудьте о догадках при учёте рабочего времени сотрудников. Наша система автоматически фиксирует рабочее время, организует расписания и даёт HR возможность в реальном времени видеть активность команды.",
        timeTrackingPoint1: "1. Автоматическая регистрация, обнаружение ошибок и точные записи рабочего времени.",
        timeTrackingPoint2: "2. Оптимизация смен с учётом доступности, нагрузки и потребностей в персонале.",
        timeTrackingPoint3: "3. Отчёты в реальном времени по сверхурочным, отсутствиям и тенденциям продуктивности.",
        // Payroll Management
        payrollHeading: "Легкое управление зарплатой",
        payrollSubheading: "Управление зарплатой",
        payrollText: "Наша умная система расчета зарплаты автоматически вычисляет оклады, переработки и удержания на основе учёта рабочего времени и утверждений. Больше никаких таблиц или ручных исправлений — всё синхронизировано и точно в реальном времени. Вы можете просматривать, корректировать и подтверждать выплаты всего несколькими кликами. Независимо от того, работает ли ваша команда на месте или удалённо, обработка зарплаты становится быстрой, прозрачной и полностью беззаботной.",
        payrollSummary: "Сводка по зарплате",
        payrollSummaryPeriod: "С 1 по 31 октября 2025",
        payrollSummaryViewReport: "Просмотреть отчет",
        payrollPayment: "Выплата",
        payrollPaymentPending: "В ожидании",
        payrollPaymentPaid: "Оплачено",
        // Ready To Get Started?
        ctaHeading: "Готовы начать?",
        ctaText: `Узнайте, как <span class="companyName">HR Tail</span> может упростить планирование, учёт и управление командой — всё в одном месте.`,
        ctaEmailPlaceholder: "Ваш email",
        ctaButton: "Получить демо",
        // footer
        footerTextMain: `<p><span class="companyName">HR Tail</span> предоставляет надежные решения для планирования смен,</p> 
                        <p>учета рабочего времени и управления зарплатой. </p>
                        <p>Создано для компаний, которые ценят эффективность, прозрачность и развитие.</p> `,
        footerAboutTitle: "О нас",
        footerTrustedBy: "Нам доверяют",
        footerContacts: "Контакты",
        footerFeaturesTitle: "Функции",
        footerSmartScheduling: "Умное планирование",
        footerTimeTracking: "Учёт времени",
        footerPayrollManagement: "Управление зарплатой",
        footerUpdatesTitle: "Обновления",
        footerChangelog: "Журнал изменений",
        footerRights: "Все права защищены.",
        footerTerms: "Условия обслуживания",
        footerPrivacy: "Политика конфиденциальности",
        mobilePhone: "Телефон",
        mobileQuickLinks: "Быстрые ссылки",
        mobileFeatures: "Функции",
        mobileRealTime: "Обновления в реальном времени",
        mobileAboutUs: "О нас",
        mobileTerms: "Условия обслуживания",
        mobilePrivacy: "Политика конфиденциальности",
        mobileRights: "Все права защищены.",
        loginText: "Войти",
        loginText2: "Войти",
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
    const aboutTitle = document.getElementById('aboutTitle');
    const aboutSubtitle = document.getElementById('aboutSubtitle');
    const missionTitle = document.getElementById('missionTitle');
    const missionText1 = document.getElementById('missionText1');
    const missionText2 = document.getElementById('missionText2');
    const missionText3 = document.getElementById('missionText3');
    const readMore = document.getElementById('readMore');
    // Our Features block
    const featuresTitle = document.getElementById('featuresTitle');
    const featuresSubtitle = document.getElementById('featuresSubtitle');
    const featuresText = document.getElementById('featuresText');
    const viewAll = document.getElementById('viewAll');
    const shiftOptimization = document.getElementById('shiftOptimization');
    const shiftText = document.getElementById('shiftText');
    const shiftText2 = document.getElementById('shiftText2');
    const openShiftManagement = document.getElementById('openShiftManagement');
    // Time Tracking block
    const timeTrackingTitle = document.getElementById('timeTrackingTitle');
    const timeTrackingText = document.getElementById('timeTrackingText');
    const timeTrackingPoint1 = document.getElementById('timeTrackingPoint1');
    const timeTrackingPoint2 = document.getElementById('timeTrackingPoint2');
    const timeTrackingPoint3 = document.getElementById('timeTrackingPoint3');
    // Payroll Management
    const payrollHeading = document.getElementById('payrollHeading');
    const payrollSubheading = document.getElementById('payrollSubheading');
    const payrollText = document.getElementById('payrollText');
    const payrollSummary = document.getElementById('payrollSummary');
    const payrollSummaryPeriod = document.getElementById('payrollSummaryPeriod');
    const payrollSummaryViewReport = document.getElementById('payrollSummaryViewReport');
    const payrollPayment = document.getElementById('payrollPayment');
    const payrollPaymentPending = document.getElementById('payrollPaymentPending');
    const payrollPaymentPaid = document.getElementById('payrollPaymentPaid');
    // Ready To Get Started?
    const ctaHeading = document.getElementById('ctaHeading');
    const ctaText = document.getElementById('ctaText');
    const ctaEmail = document.getElementById('ctaEmail');
    const ctaButton = document.getElementById('ctaButton');
    // footer
    const footerTextMain = document.getElementById('footerTextMain');
    const footerAboutTitle = document.getElementById('footerAboutTitle');
    const footerTrustedBy = document.getElementById('footerTrustedBy');
    const footerContacts = document.getElementById('footerContacts');
    const footerFeaturesTitle = document.getElementById('footerFeaturesTitle');
    const footerSmartScheduling = document.getElementById('footerSmartScheduling');
    const footerTimeTracking = document.getElementById('footerTimeTracking');
    const footerPayrollManagement = document.getElementById('footerPayrollManagement');
    const footerUpdatesTitle = document.getElementById('footerUpdatesTitle');
    const footerChangelog = document.getElementById('footerChangelog');
    const footerRights = document.getElementById('footerRights');
    const footerTerms = document.getElementById('footerTerms');
    const footerPrivacy = document.getElementById('footerPrivacy');
    const mobilePhone = document.getElementById('mobilePhone');
    const mobileQuickLinks = document.getElementById('mobileQuickLinks');
    const mobileFeatures = document.getElementById('mobileFeatures');
    const mobileRealTime = document.getElementById('mobileRealTime');
    const mobileAboutUs = document.getElementById('mobileAboutUs');
    const mobileTerms = document.getElementById('mobileTerms');
    const mobileRights = document.getElementById('mobileRights');
    const mobilePrivacy = document.getElementById('mobilePrivacy');
    const loginText = document.getElementById('loginText');
    const loginText2 = document.getElementById('loginText2');
    



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
    aboutTitle.textContent = translations[selectedLang].aboutTitle;
    aboutSubtitle.innerHTML = translations[selectedLang].aboutSubtitle;
    missionTitle.textContent = translations[selectedLang].missionTitle;
    missionText1.textContent = translations[selectedLang].missionText1;
    missionText2.textContent = translations[selectedLang].missionText2;
    missionText3.textContent = translations[selectedLang].missionText3;
    readMore.textContent = translations[selectedLang].readMore;
    // Our Features block
    featuresTitle.textContent = translations[selectedLang].featuresTitle;
    featuresSubtitle.textContent = translations[selectedLang].featuresSubtitle;
    featuresText.textContent = translations[selectedLang].featuresText;
    viewAll.textContent = translations[selectedLang].viewAll;
    shiftOptimization.textContent = translations[selectedLang].shiftOptimization;
    shiftText.textContent = translations[selectedLang].shiftText;
    shiftText2.textContent = translations[selectedLang].shiftText2;
    openShiftManagement.textContent = translations[selectedLang].openShiftManagement;
    // Time Tracking block
    timeTrackingTitle.textContent = translations[selectedLang].timeTrackingTitle;
    timeTrackingText.textContent = translations[selectedLang].timeTrackingText;
    timeTrackingPoint1.textContent = translations[selectedLang].timeTrackingPoint1;
    timeTrackingPoint2.textContent = translations[selectedLang].timeTrackingPoint2;
    timeTrackingPoint3.textContent = translations[selectedLang].timeTrackingPoint3;
    // Payroll Management
    payrollHeading.textContent = translations[selectedLang].payrollHeading;
    payrollSubheading.textContent = translations[selectedLang].payrollSubheading;
    payrollText.textContent = translations[selectedLang].payrollText;
    payrollSummary.textContent = translations[selectedLang].payrollSummary;
    payrollSummaryPeriod.textContent = translations[selectedLang].payrollSummaryPeriod;
    payrollSummaryViewReport.textContent = translations[selectedLang].payrollSummaryViewReport;
    payrollPayment.textContent = translations[selectedLang].payrollPayment;
    payrollPaymentPending.textContent = translations[selectedLang].payrollPaymentPending;
    payrollPaymentPaid.textContent = translations[selectedLang].payrollPaymentPaid;
    // Ready To Get Started?
    ctaHeading.textContent = translations[selectedLang].ctaHeading;
    ctaText.innerHTML = translations[selectedLang].ctaText;
    applyCompanyName();
    ctaEmail.placeholder = translations[selectedLang].ctaEmailPlaceholder;
    ctaButton.textContent = translations[selectedLang].ctaButton;
    // footer
    footerTextMain.innerHTML = translations[selectedLang].footerTextMain;
    applyCompanyName();
    footerAboutTitle.textContent = translations[selectedLang].footerAboutTitle;
    footerTrustedBy.textContent = translations[selectedLang].footerTrustedBy;
    footerContacts.textContent = translations[selectedLang].footerContacts;
    footerFeaturesTitle.textContent = translations[selectedLang].footerFeaturesTitle;
    footerSmartScheduling.textContent = translations[selectedLang].footerSmartScheduling;
    footerTimeTracking.textContent = translations[selectedLang].footerTimeTracking;
    footerPayrollManagement.textContent = translations[selectedLang].footerPayrollManagement;
    footerUpdatesTitle.textContent = translations[selectedLang].footerUpdatesTitle;
    footerChangelog.textContent = translations[selectedLang].footerChangelog;
    footerRights.textContent = translations[selectedLang].footerRights;
    footerTerms.textContent = translations[selectedLang].footerTerms;
    footerPrivacy.textContent = translations[selectedLang].footerPrivacy;
    mobilePhone.textContent = translations[selectedLang].mobilePhone;
    mobileQuickLinks.textContent = translations[selectedLang].mobileQuickLinks;
    mobileFeatures.textContent = translations[selectedLang].mobileFeatures;
    mobileRealTime.textContent = translations[selectedLang].mobileRealTime;
    mobileAboutUs.textContent = translations[selectedLang].mobileAboutUs;
    mobileTerms.textContent = translations[selectedLang].mobileTerms;
    mobileRights.textContent = translations[selectedLang].mobileRights;
    mobilePrivacy.textContent = translations[selectedLang].mobilePrivacy;
    loginText.textContent = translations[selectedLang].loginText;
    loginText2.textContent = translations[selectedLang].loginText2;
};



const handleLanguageChange = (switcherId, optionsId, selectedLanguageId) => {
    const switcher = document.getElementById(selectedLanguageId);
    const options = document.getElementById(optionsId);

    switcher.addEventListener('click', function(e) {
        e.stopPropagation();
        options.classList.toggle('hidden');

        // Динамически ищем стрелку
        const arrow = document.getElementById(selectedLanguageId).querySelector('img[alt="arrow"]');
        if (arrow) {
            arrow.style.transform = options.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });

    document.querySelectorAll(`#${optionsId} a`).forEach(function(option) {
        option.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            const selectedFlag = option.querySelector('img').src;
            const selectedText = option.querySelector('span').textContent;

            document.getElementById('selectedLanguageDesktop').innerHTML = `
                <div class="rounded-[12px] bg-[#0A0A0A] flex items-center text-white h-full px-[12px] gap-[10px]">
                    <img src="${selectedFlag}" alt="${selectedLang} Flag" class="flag w-6 h-6">
                    <span class="uppercase text-[16px] font-semibold leading-[100%]">${selectedLang} </span>
                    <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
                </div>
            `;
            document.getElementById('selectedLanguageMobile').innerHTML = `
                <img src="${selectedFlag}" alt="${selectedLang} Flag" class="flag w-6 h-6">
                <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
            `;

            updateContent(selectedLang);

            // ПЕРЕСТАВЛЯЕМ ГАЛОЧКУ К ВЫБРАННОМУ ЯЗЫКУ
            document.querySelectorAll(`#${optionsId} a .check`).forEach(el => {
                el.classList.add('hidden');   // убираем у всех
            });

            option.querySelector('.check').classList.remove('hidden'); // показываем у выбранного
            document.getElementById(optionsId).classList.add('hidden'); // Закрываем меню сразу после выбора

            const arrow = document.getElementById(selectedLanguageId).querySelector('img[alt="arrow"]');
            if (arrow) arrow.style.transform = 'rotate(0deg)';

            document.getElementById(optionsId).classList.add('hidden');
        });
    });
};

// Initialize switchers
handleLanguageChange('desktopLanguageSwitcher', 'languageOptionsDesktop', 'selectedLanguageDesktop');
handleLanguageChange('mobileLanguageSwitcher', 'languageOptionsMobile', 'selectedLanguageMobile');

// Определяем язык браузера
let browserLang = navigator.language || navigator.userLanguage;
browserLang = browserLang.toLowerCase();

// Set default language
let defaultLanguage = 'en';
let defaultFlag = 'img/en.svg';

if (browserLang.startsWith('ru')) {
    defaultLanguage = 'ru';
    defaultFlag = 'img/ru.svg';
}

document.getElementById('selectedLanguageDesktop').innerHTML = `
    <div class="rounded-[12px] bg-[#0A0A0A] flex items-center text-white h-full px-[12px] gap-[10px]">
        <img src="${defaultFlag}" alt="${defaultLanguage} Flag" class="flag w-6 h-6">
        <span class="uppercase text-[16px] font-semibold leading-[100%]">${defaultLanguage} </span>
        <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
    </div>
    
`;
document.getElementById('selectedLanguageMobile').innerHTML = `
    <img src="${defaultFlag}" alt="${defaultLanguage} Flag" class="flag w-6 h-6">
    <img src="img/arrow.svg" alt="arrow" class="w-6 h-6">
`;
updateContent(defaultLanguage);

// --- Закрытие при клике вне (Desktop + Mobile) ---
document.addEventListener("click", (e) => {
    const desktopBlock = document.getElementById("desktopLanguageSwitcher");
    const desktopOptions = document.getElementById("languageOptionsDesktop");

    const mobileBlock = document.getElementById("mobileLanguageSwitcher");
    const mobileOptions = document.getElementById("languageOptionsMobile");

    // Desktop
    if (desktopBlock && desktopOptions && !desktopBlock.contains(e.target)) {
        desktopOptions.classList.add("hidden");
    }

    // Mobile
    if (mobileBlock && mobileOptions && !mobileBlock.contains(e.target)) {
        mobileOptions.classList.add("hidden");
    }
});


var nav = document.getElementById('nav');
var newDate = new Date();
var year = newDate.getUTCFullYear();

document.getElementById("year").innerHTML = year;

function openMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'block';
    document.getElementById('openIcon').style.display = 'none';
    document.getElementById('closeIcon').style.display = 'block';
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'none';
    document.getElementById('openIcon').style.display = 'block';
    document.getElementById('closeIcon').style.display = 'none';
}


// --- Закрытие при клике вне меню ---
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    // Если меню открыто и клик не по меню и не по кнопке
    if (
        mobileMenu.style.display === 'block' &&
        !mobileMenu.contains(event.target) &&
        !openIcon.contains(event.target) &&
        !closeIcon.contains(event.target)
    ) {
        closeMobileMenu();
    }
});
