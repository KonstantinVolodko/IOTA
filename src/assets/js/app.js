document.addEventListener("DOMContentLoaded", () => {

  let desctopHelper = document.querySelector('.main-services__desctopHelper')
  let acc = document.querySelectorAll(".main-services__btn");


  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("activeTab");
      let panel = this.nextElementSibling;
      desctopHelper.innerHTML = panel.innerHTML
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  acc[0].click()


  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiperButtonNext',
      prevEl: '.swiperButtonPrev',
    },
    loop: true,
    loopedSlides: 4
  });
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    // spaceBetween: 'auto',
    // centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;


  let accrordeonBtn = document.querySelectorAll(".main-firstStep__accrordeonBtn");

  for (let i = 0; i < accrordeonBtn.length; i++) {
    accrordeonBtn[i].addEventListener("click", function () {
      // this.classList.toggle("activeTab");
      let panel2 = this.nextElementSibling;
      console.log(panel2)
      if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
      } else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";
      }
    });
  }



  const swiperFunction = function () {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.main-gallery__buttonPrev',
        prevEl: '.main-gallery__buttonNext',
      },
    });
  }


  let tabHeader = document.querySelectorAll('.main-gallery__tabHeader')
  let galleryHelper = document.querySelector('.main-gallery__helper')

  tabHeader.forEach(e => {
    e.addEventListener('click', el => {
      galleryHelper.innerHTML = e.nextElementSibling.innerHTML
      swiperFunction()
      tabHeader.forEach(elem => {
        elem.classList.remove('activeTab')
      })
      e.classList.add('activeTab')

    })
  })

  tabHeader[0].click()


  let burger = document.querySelectorAll('.header-content__burger')
  let burgerHelper = document.querySelector('.header-menu__helpCrossContainer')
  let burgerTransition = document.querySelector('.header-content__burgerTransition')

  burger.forEach(e => {
    console.log(e)
    e.addEventListener('click', () => {
      e.classList.toggle('cross')
      e.classList.toggle('header-content__burger_hover')
  
      if(e.classList.contains('cross')) {
        burgerHelper.innerHTML = burgerTransition.innerHTML

        
      }
    })
  })






  let menuTabsHelper = document.querySelector('.header-menu__tabsHelper')
  let tabsFirstLvlTitle = document.querySelectorAll('.header-menu__tabsFirstLvlTitle')

  tabsFirstLvlTitle.forEach(e => {
    e.addEventListener('click', el => {
      menuTabsHelper.innerHTML = e.nextElementSibling.innerHTML

      let headerAccBtn = document.getElementsByClassName("header-menu__accordionBtn");

      for (let i = 0; i < headerAccBtn.length; i++) {
        headerAccBtn[i].addEventListener("click", function () {
          // this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    })
  })

  tabsFirstLvlTitle[0].click()


  let crossHelper = document.querySelector('.header-menu__helpCrossContainer')

  let fakeBurger = burgerHelper.nextElementSibling
  
  fakeBurger.addEventListener('click', e => {
    fakeBurger.classList.toggle('.cross')
  })
})











