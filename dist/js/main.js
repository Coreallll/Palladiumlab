"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var params = {
    btnClassName: "hero__services-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", function (evt) {
      var activeElements = document.querySelectorAll(".".concat(params.activeClassName));

      if (activeElements.length && !evt.target.closest(".".concat(params.activeClassName))) {
        activeElements.forEach(function (current) {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(".".concat(params.btnClassName))) {
        var btn = evt.target.closest(".".concat(params.btnClassName));
        var path = btn.dataset.path;
        var drop = document.querySelector("[data-target=\"".concat(path, "\"]"));
        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();
});
var btnServ = document.querySelector('.hero__services-btn');
var backBot = document.querySelector('.hero-bottom');
var titleMain = document.querySelector('.hero__title--main');
var subtitle = document.querySelector('.hero__subtitle');
var callLink = document.querySelector('.hero__callback-link');
var btnStreak = document.querySelector('.btn-streak-hero');
var marker = document.querySelector('.marker-icon');
var markerBorder = document.querySelector('.header__marker');
var phone = document.querySelector('.phone-icon');
var phoneBorder = document.querySelector('.header__phone');
var logo = document.querySelector('.logo');
var navLink = document.querySelectorAll('.nav__link');
var header = document.querySelector('.header');
var headerInfo = document.querySelector('.header-info');
var btnRep = document.querySelector('.btn-repair');
var btnJob = document.querySelector('.btn-jobs');
var btnDes = document.querySelector('.btn-design');
var btnRoom = document.querySelector('.btn-room');
var back1 = document.querySelector('.back-hero--repair');
var back2 = document.querySelector('.back-hero--jobs');
var back3 = document.querySelector('.back-hero--design');
var back4 = document.querySelector('.back-hero--room');
var title1 = document.querySelector('.title-repair');
var title2 = document.querySelector('.title-jobs');
var title3 = document.querySelector('.title-design');
var title4 = document.querySelector('.title-room');
btnServ.addEventListener('click', function () {
  backBot.classList.add('hero-bottom--disable');
  titleMain.classList.add('hero__title--main-disable');
  subtitle.classList.add('hero__subtitle--reverse');
  callLink.classList.add('hero__callback-link--reverse');
  btnStreak.classList.add('btn-streak--reverse');
  marker.classList.add('marker-icon--reverse');
  phone.classList.add('phone-icon--reverse');
  logo.classList.add('logo--reverse');
  header.classList.add('header--reverse');
  markerBorder.classList.add('header__marker--reverse');
  phoneBorder.classList.add('header__phone--reverse');
  navLink.forEach(function (navLink) {
    navLink.classList.add('nav__link--reverse');
  });
});
btnRep.addEventListener('click', function () {
  back2.classList.remove('back-hero--active');
  back3.classList.remove('back-hero--active');
  back4.classList.remove('back-hero--active');
  title2.classList.remove('title-active');
  title3.classList.remove('title-active');
  title4.classList.remove('title-active');
  back1.classList.add('back-hero--active');
  title1.classList.add('title-active');
});
btnJob.addEventListener('click', function () {
  back1.classList.remove('back-hero--active');
  back3.classList.remove('back-hero--active');
  back4.classList.remove('back-hero--active');
  title1.classList.remove('title-active');
  title3.classList.remove('title-active');
  title4.classList.remove('title-active');
  back2.classList.add('back-hero--active');
  title2.classList.add('title-active');
});
btnDes.addEventListener('click', function () {
  back1.classList.remove('back-hero--active');
  back2.classList.remove('back-hero--active');
  back4.classList.remove('back-hero--active');
  title1.classList.remove('title-active');
  title2.classList.remove('title-active');
  title4.classList.remove('title-active');
  back3.classList.add('back-hero--active');
  title3.classList.add('title-active');
});
btnRoom.addEventListener('click', function () {
  back1.classList.remove('back-hero--active');
  back2.classList.remove('back-hero--active');
  back3.classList.remove('back-hero--active');
  title1.classList.remove('title-active');
  title2.classList.remove('title-active');
  title3.classList.remove('title-active');
  back4.classList.add('back-hero--active');
  title4.classList.add('title-active');
});
var tlMarker = gsap.timeline({
  paused: true,
  reversed: false
});
markerBorder.addEventListener('click', function () {
  tlMarker.play();
  markerBorder.addEventListener('click', function (reversed) {
    tlMarker.reversed(!tlMarker.reversed());
  });
});
tlMarker.from(".header-info", {
  opacity: 0,
  y: -150,
  duration: 0.35
});
var tlPhone = gsap.timeline({
  paused: true,
  reversed: false
});
phoneBorder.addEventListener('click', function () {
  tlPhone.play();
  phoneBorder.addEventListener('click', function (reversed) {
    tlPhone.reversed(!tlPhone.reversed());
  });
});
tlPhone.from(".header-callback", {
  opacity: 0,
  y: -150,
  duration: 0.35
});