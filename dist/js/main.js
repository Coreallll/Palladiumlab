"use strict";

var services = document.querySelectorAll('.hero__services-item');
var heroTitle = document.querySelector('.hero__title--main');
var heroBottom = document.querySelector('.hero-bottom');
var callbackLink = document.querySelector('.hero__callback-link');
var btnStreak = document.querySelector('.btn-streak');
var subtitleReverse = document.querySelector('.hero__subtitle');
var navLink = document.querySelectorAll('.nav__link');
var marker = document.querySelector('.marker');
var phone = document.querySelector('.phone');
var logo = document.querySelector('.logo');
services.forEach(function (services) {
  services.onmouseover = function () {
    heroTitle.classList.add('hero__title--off'), heroBottom.classList.add('hero-bottom--off'), callbackLink.classList.add('link-active'), btnStreak.classList.add('btn-streak--reverse'), subtitleReverse.classList.add('hero__subtitle--reverse');
    marker.classList.add('marker--reverse');
    logo.classList.add('logo--reverse');
    phone.classList.add('phone--reverse');
    navLink.forEach(function (navLink) {
      navLink.classList.add('nav__link--reverse');
    });
  };

  services.onmouseout = function () {
    heroTitle.classList.remove('hero__title--off'), heroBottom.classList.remove('hero-bottom--off'), callbackLink.classList.remove('link-active'), btnStreak.classList.remove('btn-streak--reverse'), subtitleReverse.classList.remove('hero__subtitle--reverse');
    marker.classList.remove('marker--reverse');
    logo.classList.remove('logo--reverse');
    phone.classList.remove('phone--reverse');
    navLink.forEach(function (navLink) {
      navLink.classList.remove('nav__link--reverse');
    });
  };
});