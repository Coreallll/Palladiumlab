const services = document.querySelectorAll('.hero__services-item');
const heroTitle = document.querySelector('.hero__title--main');
const heroBottom = document.querySelector('.hero-bottom');
const callbackLink = document.querySelector('.hero__callback-link');
const btnStreak = document.querySelector('.btn-streak');
const subtitleReverse = document.querySelector('.hero__subtitle');
const navLink = document.querySelectorAll('.nav__link');
const marker = document.querySelector('.marker');
const phone = document.querySelector('.phone');
const logo = document.querySelector('.logo');

services.forEach(function(services) {
    services.onmouseover = function() {
        heroTitle.classList.add('hero__title--off'),
        heroBottom.classList.add('hero-bottom--off'),
        callbackLink.classList.add('link-active'),
        btnStreak.classList.add('btn-streak--reverse'),
        subtitleReverse.classList.add('hero__subtitle--reverse');
        marker.classList.add('marker--reverse');
        logo.classList.add('logo--reverse');
        phone.classList.add('phone--reverse');
        navLink.forEach(function(navLink) {
            navLink.classList.add('nav__link--reverse')
        })
    
    }
    
    services.onmouseout = function() {
        heroTitle.classList.remove('hero__title--off'),
        heroBottom.classList.remove('hero-bottom--off'),
        callbackLink.classList.remove('link-active'),
        btnStreak.classList.remove('btn-streak--reverse'),
        subtitleReverse.classList.remove('hero__subtitle--reverse');
        marker.classList.remove('marker--reverse');
        logo.classList.remove('logo--reverse');
        phone.classList.remove('phone--reverse');
        navLink.forEach(function(navLink) {
            navLink.classList.remove('nav__link--reverse')
        })
    }
})


