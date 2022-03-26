window.addEventListener('DOMContentLoaded', function () {
  const params = {
    btnClassName: "hero__services-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

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
})

const btnServ = document.querySelector('.hero__services-btn')
const backBot = document.querySelector('.hero-bottom')
const subtitle = document.querySelector('.hero__subtitle')
const callLink = document.querySelector('.hero__callback-link')
const btnStreak = document.querySelector('.btn-streak-hero')
const marker = document.querySelector('.marker-icon')
const markerBorder = document.querySelector('.header__marker')
const phone = document.querySelector('.phone-icon')
const phoneBorder = document.querySelector('.header__phone')
const logo = document.querySelector('.logo')
const navLink = document.querySelectorAll('.nav__link')
const header = document.querySelector('.header')
const headerInfo = document.querySelector('.header-info')

const btnRep = document.querySelector('.btn-repair')
const btnJob = document.querySelector('.btn-jobs')
const btnDes = document.querySelector('.btn-design')
const btnRoom = document.querySelector('.btn-room')
const back1 = document.querySelector('.back-hero--repair')
const back2 = document.querySelector('.back-hero--jobs')
const back3 = document.querySelector('.back-hero--design')
const back4 = document.querySelector('.back-hero--room')
const title1 = document.querySelector('.title-repair')
const title2 = document.querySelector('.title-jobs')
const title3 = document.querySelector('.title-design')
const title4 = document.querySelector('.title-room')

btnServ.addEventListener('click', function () {
  backBot.classList.add('hero-bottom--disable')
  subtitle.classList.add('hero__subtitle--reverse')
  callLink.classList.add('hero__callback-link--reverse')
  btnStreak.classList.add('btn-streak--reverse')
  marker.classList.add('marker-icon--reverse')
  phone.classList.add('phone-icon--reverse')
  logo.classList.add('logo--reverse')
  header.classList.add('header--reverse')
  markerBorder.classList.add('header__marker--reverse')
  phoneBorder.classList.add('header__phone--reverse')
  navLink.forEach(function (navLink) {
    navLink.classList.add('nav__link--reverse')
  })
})

btnRep.addEventListener('click', function () {
  back2.classList.remove('back-hero--active')
  back3.classList.remove('back-hero--active')
  back4.classList.remove('back-hero--active')
  title2.classList.remove('title-active')
  title3.classList.remove('title-active')
  title4.classList.remove('title-active')

  back1.classList.add('back-hero--active')
  title1.classList.add('title-active')
})

btnJob.addEventListener('click', function () {
  back1.classList.remove('back-hero--active')
  back3.classList.remove('back-hero--active')
  back4.classList.remove('back-hero--active')
  title1.classList.remove('title-active')
  title3.classList.remove('title-active')
  title4.classList.remove('title-active')

  back2.classList.add('back-hero--active')
  title2.classList.add('title-active')
})

btnDes.addEventListener('click', function () {
  back1.classList.remove('back-hero--active')
  back2.classList.remove('back-hero--active')
  back4.classList.remove('back-hero--active')
  title1.classList.remove('title-active')
  title2.classList.remove('title-active')
  title4.classList.remove('title-active')

  back3.classList.add('back-hero--active')
  title3.classList.add('title-active')
})

btnRoom.addEventListener('click', function () {
  back1.classList.remove('back-hero--active')
  back2.classList.remove('back-hero--active')
  back3.classList.remove('back-hero--active')
  title1.classList.remove('title-active')
  title2.classList.remove('title-active')
  title3.classList.remove('title-active')

  back4.classList.add('back-hero--active')
  title4.classList.add('title-active')

})


var tlMarker = gsap.timeline({
    paused: true,
    reversed:false
  });
  
  markerBorder.addEventListener('click', () => {
    tlMarker.play()
    markerBorder.addEventListener('click', (reversed) => {
      tlMarker.reversed(!tlMarker.reversed())
    })
  });
  
  tlMarker.from(".header-info", {opacity: 0,y: -150,duration: 0.35})
  
  
  var tlPhone = gsap.timeline({
    paused: true,
    reversed:false
  });
  
  phoneBorder.addEventListener('click', () => {
    tlPhone.play()
    phoneBorder.addEventListener('click', (reversed) => {
      tlPhone.reversed(!tlPhone.reversed())
    })
  });
  
  tlPhone.from(".header-callback", {opacity: 0,y: -150,duration: 0.35})



