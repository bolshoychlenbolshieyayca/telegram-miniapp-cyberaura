const contactBtn = document.getElementById('contact-btn')
const infoBtn = document.getElementById('info-btn')

const rusLangBtn = document.getElementById('rus-lang')
const engLangBtn = document.getElementById('eng-lang')
const highlightBlock = document.querySelector('.highlight-block')
let language = 'ru'
let theme_ = 'dark'
const translations = {
        ru: {
            contact: 'ОБРАТИТЬСЯ',
            info: 'ИНФОРМАЦИЯ'
        },
        en: {
            contact: 'CONTACT',
            info: 'INFORMATION'
        }
    }

const moonLogoBtn = document.querySelector('.moon-logo-btn')
const sunLogoBtn = document.querySelector('.sun-logo-btn')
const moonLogo = document.querySelector('.moonLogo')
const sunLogo = document.querySelector('.sunLogo')
const highlightBlockTheme = document.querySelector('.highlight-block-theme')

const logoImage = document.querySelector('.logo')

const buttons = [contactBtn, infoBtn, moonLogoBtn, sunLogoBtn]


// Смена темы

const translateBlock = document.querySelector('.translate-block')
// highlightBlock
// rusLangBtn
// engLangBtn

const changeThemeBlock = document.querySelector('.change-theme-block')
// highlightBlockTheme
// moonLogo
// sunLogo

// logoImage

// contactBtn
// infoBtn

const body = document.body


function switchLanguage(lang) {
    document.documentElement.lang = lang

    highlightBlock.style.left = lang === 'ru' ? '8.7px' : '56px'
    updateLogoImage()
    // logoImage.src = lang === 'ru' ? '/static/icons/кибераура2.svg' : '/static/icons/cybaraura2.svg'
    contactBtn.textContent = translations[lang].contact
    infoBtn.textContent = translations[lang].info
}

function updateLogoImage() {
    if (theme_ === 'dark') {
        logoImage.src = language === 'ru' ? '/static/icons/miniApp/кибераура2.svg' : '/static/icons/miniApp/cybaraura2.svg'
    } else if (theme_ === 'light') {
        logoImage.src = language === 'ru' ? '/static/icons/miniApp/кибераура2Dark.svg' : '/static/icons/miniApp/cybaraura2Dark.svg'
    }
}

function setupLanguageButton(button, lang) {
    button.addEventListener('pointerdown', () => {
        button.style.transform = 'scale(0.95)'
        button.style.opacity = '0.9'
    });
    
    button.addEventListener('pointerleave', () => {
        button.style.transform = ''
        button.style.opacity = ''
    });
    
    button.addEventListener('pointerup', () => {
        button.style.transform = ''
        button.style.opacity = ''
        language = lang
        switchLanguage(lang)
    });
}

function setupButtonEffects(button) {
    button.addEventListener('pointerdown', () => {
        button.style.transform = 'scale(0.95)'
        button.style.opacity = '0.9'
    });
    
    button.addEventListener('pointerleave', () => {
        button.style.transform = ''
        button.style.opacity = ''
    });
    
    button.addEventListener('pointerup', () => {
        button.style.transform = ''
        button.style.opacity = ''
    });
}

function switchTheme(theme) {
    highlightBlockTheme.style.left = theme === 'dark' ? '5.5px' : '38.5px'

    translateBlock.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(15, 15, 15), rgb(22, 22, 22))' : 'linear-gradient(20deg, rgb(210, 210, 210), rgb(230, 230, 230))'
    translateBlock.style.boxShadow = theme === 'dark' ? '3px 3px 7px rgba(0, 0, 0, 0.7)' : '3px 3px 5px rgba(0, 0, 0, 0.4)'
    highlightBlock.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(6, 6, 6), rgb(12, 12, 12))' : 'linear-gradient(20deg, rgb(160, 160, 160), rgb(225, 225, 225))'
    rusLangBtn.style.color = theme === 'dark' ? 'rgb(230, 230, 230)' :
    'rgb(33, 33, 33)'
    engLangBtn.style.color = theme === 'dark' ? 'rgb(230, 230, 230)' :
    'rgb(33, 33, 33)'

    changeThemeBlock.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(15, 15, 15), rgb(22, 22, 22))' : 'linear-gradient(20deg, rgb(210, 210, 210), rgb(230, 230, 230))'
    changeThemeBlock.style.boxShadow = theme === 'dark' ? '3px 3px 7px rgba(0, 0, 0, 0.7)' : 'box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);'
    highlightBlockTheme.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(6, 6, 6), rgb(12, 12, 12))' : 'linear-gradient(20deg, rgb(150, 150, 150), rgb(215, 215, 215))'
    moonLogo.src = theme === 'dark' ? '/static/icons/miniApp/moonLight.svg' : '/static/icons/miniApp/moonDark.svg'
    sunLogo.src = theme === 'dark' ? '/static/icons/miniApp/sunLight.svg' : '/static/icons/miniApp/sunDark.svg'

    contactBtn.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(22, 22, 22), rgb(30, 30, 30))' : 'linear-gradient(20deg, rgb(200, 200, 200), rgb(230, 230, 230))'
    contactBtn.style.boxShadow = theme === 'dark' ? '5px 5px 7px rgba(0, 0, 0, 0.6)' : '5px 5px 7px rgba(0, 0, 0, 0.4)'
    infoBtn.style.background = theme === 'dark' ? 'linear-gradient(20deg, rgb(22, 22, 22), rgb(30, 30, 30))' : 'linear-gradient(20deg, rgb(200, 200, 200), rgb(230, 230, 230))'
    infoBtn.style.boxShadow = theme === 'dark' ? '5px 5px 7px rgba(0, 0, 0, 0.6)' : '5px 5px 7px rgba(0, 0, 0, 0.4)'
    contactBtn.style.color = theme === 'dark' ? 'rgb(230, 230, 230)' : 'rgb(44, 44, 44)'
    infoBtn.style.color = theme === 'dark' ? 'rgb(230, 230, 230)' : 'rgb(44, 44, 44)'

    body.style.backgroundColor = theme === 'dark' ? 'rgb(46, 46, 46)' : 'rgb(100, 100, 100)'

    theme_ = theme
    updateLogoImage()
}

function switchThemeButton(button, theme) {
    button.addEventListener('pointerdown', () => {
        button.style.transform = 'scale(0.95)';
        button.style.opacity = '0.9';
    });

    button.addEventListener('pointerleave', () => {
        button.style.transform = '';
        button.style.opacity = '';
    });

    button.addEventListener('pointerup', () => {
        button.style.transform = '';
        button.style.opacity = '';
        switchTheme(theme);
    });
}

setupLanguageButton(engLangBtn, 'en')
setupLanguageButton(rusLangBtn, 'ru')

switchThemeButton(moonLogoBtn, 'dark')
switchThemeButton(sunLogoBtn, 'light')

buttons.forEach(button => setupButtonEffects(button))