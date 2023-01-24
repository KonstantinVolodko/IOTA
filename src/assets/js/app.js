document.addEventListener("DOMContentLoaded", () => {

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  })

  let mainPage = document.querySelector('.main')
  let scrollWidth = (window.innerWidth - document.body.clientWidth + 'px')
  let desctopHelper = document.querySelector('.main-services__desctopHelper')
  let acc = document.querySelectorAll(".main-services__btn");


  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      acc.forEach(e => {
        e.classList.remove("activeTab")

        e.nextElementSibling.style.maxHeight = null;
      })
      this.classList.add("activeTab");
      const tl16 = gsap.timeline();

      tl16.from('.main-services__desctopHelper', { opacity: 0, duration: 1.5 })

      acc.forEach(element => {
        element.classList.remove('deleteHover')
        if (element.classList.contains('activeTab')) {
          element.classList.add('deleteHover')
        }
      })

      let panel = this.nextElementSibling;
      desctopHelper.innerHTML = panel.innerHTML
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // let swiperSlidesSec = document.querySelectorAll('.swiper-slide-containerSec')
  // swiperSlidesSec.forEach((el, id) => {
  //   el.setAttribute('data-tab', id)
  // })

  let swiperSlideSec = document.querySelectorAll('.gallery-top .swiper-slide')
  swiperSlideSec.forEach((e, id) => {
    e.setAttribute('data-swiper-tab', id)
  })

  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiperButtonNext',
      prevEl: '.swiperButtonPrev',
    },
    loopedSlides: 4,
    watchOverflow: true,
    allowTouchMove: false,
  });

  if (mainPage) {
    let swiperButtonNext = document.querySelector('.swiperButtonNext')
    let swiperButtonPrev = document.querySelector('.swiperButtonPrev')
    let swiperCount = 0

    let mainResultNumber = document.querySelectorAll('.main-result__number')
    mainResultNumber.forEach((e, id) => {
      e.setAttribute('id', id)
      e.addEventListener('click', elem => {
        mainResultNumber.forEach(elements => {
          elements.classList.remove('main-result__numberActive')
        })
        e.classList.add('main-result__numberActive')
        
        galleryTop.slideTo(e.getAttribute('id'))
      })

    })


    swiperButtonNext.addEventListener('click', e => {
      if (swiperCount === 3) {
        swiperCount = 0
        mainResultNumber[0].click()
      }else if (swiperCount < 3 && swiperCount >= 0) {
        swiperCount += 1
        mainResultNumber[swiperCount].click()
      }
    })

    swiperButtonPrev.addEventListener('click', e => {
      if (swiperCount === 0) {
        swiperCount = 3
        mainResultNumber[3].click()
      } else if (swiperCount > 0 && swiperCount <= 3) {
        swiperCount -= 1
        mainResultNumber[swiperCount].click()
      }
    })




    mainResultNumber[0].click()
  }










  let accrordeonBtn = document.querySelectorAll(".main-firstStep__accrordeonBtn");

  for (let i = 0; i < accrordeonBtn.length; i++) {
    accrordeonBtn[i].addEventListener("click", function () {
      this.classList.toggle("paddingActiveTab");
      let panel2 = this.nextElementSibling;
      if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
      } else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";
      }
    });
  }



  const swiperFunction = function () {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 80,
      loop: true,
      navigation: {
        nextEl: '.main-gallery__buttonPrev',
        prevEl: '.main-gallery__buttonNext',
      },
      breakpoints: {
        850: {
          slidesPerView: 1.45,
          spaceBetween: -25,
        },
      }
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

  if (tabHeader.length != 0) {
    tabHeader[0].click()
  }


  let headerPadding = document.querySelector('.header-content')
  let burger = document.querySelectorAll('.header-content__burger')
  let burgerHelper = document.querySelector('.header-menu__helpCrossContainer')
  let burgerTransition = document.querySelector('.header-content__burgerTransition')
  let menuContent = document.querySelector('.header-menu__content')
  let page = document.getElementsByTagName('body')

  if (window.matchMedia("(min-width: 850px)").matches) {
    document.body.style.setProperty("--scrollWidth", scrollWidth)
  }


  burger.forEach(e => {
    e.addEventListener('click', () => {
      menuContent.classList.add('showMenu')
      page[0].classList.add('blockScroll')

      if (window.matchMedia("(min-width: 850px)").matches) {
        headerPadding.style.marginRight = scrollWidth
      }
    })
  })


  burgerHelper.addEventListener('click', () => {
    menuContent.classList.remove('showMenu')
    page[0].classList.remove('blockScroll')
    headerPadding.style.marginRight = "0"
  })



  let menuTabsHelper = document.querySelector('.header-menu__tabsHelper')
  let tabsFirstLvlTitle = document.querySelectorAll('.header-menu__tabsFirstLvlTitle')



  if (window.matchMedia("(min-width: 850px)").matches) {

    tabsFirstLvlTitle.forEach(e => {
      e.addEventListener('click', el => {
        menuTabsHelper.innerHTML = e.nextElementSibling.innerHTML
        tabsFirstLvlTitle.forEach(elem => {
          elem.classList.remove('header-menu__tabsFirstLvlTitle_hover')
        })

        e.classList.add('header-menu__tabsFirstLvlTitle_hover')

        let headerAccBtn = document.querySelectorAll(".header-menu__accordionBtn");

        for (let i = 0; i < headerAccBtn.length; i++) {
          headerAccBtn[i].addEventListener("click", function () {

            headerAccBtn.forEach(element => {
              element.classList.remove('header-menu__accordionBtn_hover')
            })

            this.classList.add('header-menu__accordionBtn_hover')

            var panel = this.nextElementSibling;

            headerAccBtn.forEach(e => {
              e.nextElementSibling.style.maxHeight = null;
            })

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
      })
    })

    if (tabsFirstLvlTitle.length != 0) {
      tabsFirstLvlTitle[0].click()
    }
  }

  if (window.matchMedia("(max-width: 850px)").matches) {

    let i

    for (i = 0; i < tabsFirstLvlTitle.length; i++) {
      tabsFirstLvlTitle[i].addEventListener("click", function () {
        let panelSecond = this.nextElementSibling;

        tabsFirstLvlTitle.forEach(e => {
          e.nextElementSibling.style.maxHeight = null;
          e.classList.remove('header-menu__tabsFirstLvlTitle_hover')
        })

        this.classList.add('header-menu__tabsFirstLvlTitle_hover')

        if (panelSecond.style.maxHeight) {
          panelSecond.style.maxHeight = null;
        } else {
          panelSecond.style.maxHeight = panelSecond.scrollHeight + "px";
        }
      });
    }

    let headerAccBtn = document.querySelectorAll(".header-menu__accordionBtn");

    for (let j = 0; j < headerAccBtn.length; j++) {
      headerAccBtn[j].addEventListener("click", function () {
        let panel = this.nextElementSibling;


        headerAccBtn.forEach(e => {
          e.nextElementSibling.style.maxHeight = null;
          e.classList.remove('header-menu__accordionBtn_hover')
        })

        this.classList.add('header-menu__accordionBtn_hover')

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }





  let realizationSwiper2 = new Swiper(".secondPage-realization__swiper", {
    slidesPerView: 1.8,
    spaceBetween: 11,
    navigation: {
      nextEl: ".secondPage-realization__arrowRight",
      prevEl: ".secondPage-realization__arrowLeft",
    },
    pagination: {
      el: ".secondPage-realizationSwiper-pagination",
    },

    breakpoints: {
      500: {
        spaceBetween: 72,
      }
    }
  });

  let realizationSlides = document.querySelectorAll('.secondPage-realization__swiper .swiper-slide')
  let realizationPagination = document.querySelectorAll('.secondPage-realizationSwiper-pagination .swiper-pagination-bullet')
  let realizationArrows = document.querySelectorAll('.secondPage-realization__arrowsContainer svg')
  console.log(realizationArrows)


  realizationSlides.forEach(el => {
    el.addEventListener('mousemove', e => {
      realizationPagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let black = document.querySelector('.secondPage-realization__swiper .swiper-pagination-bullet-active');
      while (black = black.previousElementSibling) {
        black.classList.add('activeBlack');
      }
    })
  })

  realizationArrows.forEach(e => {
    e.addEventListener('click', elem => {
      realizationPagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let black = document.querySelector('.secondPage-realization__swiper .swiper-pagination-bullet-active');
      while (black = black.previousElementSibling) {
        black.classList.add('activeBlack');
      }
    })
  })




  const findElements = (object) => {
    const instance = object;
    const { node, select } = instance;
    instance.toggle = node.children[0];
    instance.holder = node.children[1];
    instance.isActive = false;
    instance.options = select.options;
    instance.active = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    return instance;
  };

  const isOption = (target, { className }) => target.classList.contains(`${className}__option`);

  const shouldDropdown = (target, { className }) => target.classList.contains(`${className}__option`);

  const createBaseHTML = (value, className) => (`
	<div class="${className}">
		<button class="${className}__toggle" type="button">${value}</button>
		<div class="${className}__options"></div>
    <span><img src="./assets/images/services/arrowDown.svg"></span>
	</div>
`);

  const insertBase = (select, className) => {
    const selectedIndex = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    const value = select.options[selectedIndex].textContent;
    const html = createBaseHTML(value, className);
    select.insertAdjacentHTML('afterend', html);
  };

  const renderOption = (html, option, index, active, className) => {
    const activeClassName = index === active ? `${className}__option--active` : '';
    return `
    ${html}
		<button class="${className}__option ${activeClassName}" type="button" data-index="${index}">${option.textContent}</button>
  `;
  };

  const renderOptions = (options, active, className) => {
    return [...options].reduce((acc, option, index) => renderOption(acc, option, index, active, className), '');
  };

  const pickOption = (object) => {
    const instance = object;
    const { select, active, customOptions, className } = instance;
    select.selectedIndex = active;
    instance.optionActive.classList.remove(`${className}__option--active`);
    instance.optionActive = customOptions[active];
    instance.optionActive.classList.add(`${className}__option--active`);
    instance.toggle.textContent = instance.optionActive.textContent;
  };

  const onOptionsClick = (event, object) => {
    event.preventDefault();
    const instance = object;
    const { select, hideDropdown } = instance;
    const { target } = event;
    if (isOption(target, instance)) {
      instance.active = target.dataset.index;
      pickOption(instance);
    }
    if (shouldDropdown(target, instance)) {
      hideDropdown();
    }
  };

  const initOptionsEvents = (instance) => {
    instance.holder.addEventListener('click', event => onOptionsClick(event, instance));
  };

  const render = (object) => {
    const instance = object;
    const { holder, options, className, active } = instance;
    const html = renderOptions(options, active, className);
    holder.insertAdjacentHTML('afterbegin', html);
    instance.customOptions = [...holder.children];
    instance.optionActive = instance.customOptions[active];
    initOptionsEvents(instance);
  };

  const hideSelect = ({ node, select }) => node.appendChild(select);

  const wrapSelect = (object) => {
    const instance = object;
    const { select, className } = instance;
    return new Promise((resolve) => {
      requestIdleCallback(() => {
        insertBase(select, className);
        instance.node = select.nextElementSibling;
        hideSelect(instance);
        resolve(instance);
      });
    });
  };

  const unsubscribeDocument = ({ hideDropdown }) => document.removeEventListener('click', hideDropdown);
  const subscribeDocument = ({ hideDropdown }) => document.addEventListener('click', hideDropdown);

  const hideOptions = (object) => {
    const instance = object;
    const { node, className } = instance;
    instance.isActive = false;
    node.classList.remove(`${className}--active`);
    unsubscribeDocument(instance);
  };

  const showOptions = (object) => {
    const instance = object;
    const { node, className } = instance;
    instance.isActive = true;
    node.classList.add(`${className}--active`);
    subscribeDocument(instance);
  };

  const toggleOptions = (instance) => {
    if (instance.isActive) hideOptions(instance);
    else showOptions(instance);
  };

  const onNodeClick = event => event.stopPropagation();

  const initEvents = (object) => {
    const instance = object;
    const { node, toggle } = instance;
    const showDropdown = () => { showOptions(instance); };
    const hideDropdown = () => { hideOptions(instance); };
    const toggleDropdown = () => { toggleOptions(instance); };
    instance.showDropdown = showDropdown;
    instance.hideDropdown = hideDropdown;
    instance.toggleDropdown = toggleDropdown;
    toggle.addEventListener('click', toggleDropdown);
    node.addEventListener('click', onNodeClick);
    return instance;
  };

  const constructor = (select) => {
    const instance = {
      select,
      className: select.dataset.customSelectClass,
    };

    const init = () => {
      wrapSelect(instance)
        .then(findElements)
        .then(initEvents)
        .then(render);
    };

    init();
  };

  const selects = document.querySelectorAll('[data-custom-select-class]');
  selects.forEach(constructor);

  let organizationOfSpaceSwiper = new Swiper(".organizationOfSpace-include__swiper", {
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".organizationOfSpace-include__next",
      prevEl: ".organizationOfSpace-include__prev",
    },
  });

  let designSwiper = new Swiper(".design-include__swiper", {
    slidesPerView: 1.4,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".organizationOfSpace-include__next",
      prevEl: ".organizationOfSpace-include__prev",
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
      }
    }
  });

  let realizationSwiper = new Swiper(".realizationSwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 60,

    navigation: {
      nextEl: ".realization-swiper__next",
      prevEl: ".realization-swiper__prev",
    },

    breakpoints: {
      850: {
        slidesPerView: 1.6,
      }
    }
  });




  let secondPageSwiper = new Swiper(".secondPageSwiper", {
    navigation: {
      nextEl: ".secondPage__arrowRight",
      prevEl: ".secondPage__arrowLeft",
    },

    pagination: {
      el: ".secondPageSwiper-pagination",
    },
  });












  let pagination = document.querySelectorAll('.secondPage-swiperBlock .swiper-pagination-bullet')

  let slides = document.querySelectorAll('.secondPageSwiper .swiper-slide')

  let secondPageArrowContainer = document.querySelectorAll('.secondPage__arrowContainer svg')





  slides.forEach(el => {
    el.addEventListener('mousemove', e => {
      pagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let red = document.querySelector('.secondPage-swiperBlock .swiper-pagination-bullet-active');
      while (red = red.previousElementSibling) {
        red.classList.add('activeBlack');
      }
    })
  })

  secondPageArrowContainer.forEach(e => {
    e.addEventListener('click', elem => {
      pagination.forEach(elem => {
        elem.classList.remove('activeBlack')
      })
      let red = document.querySelector('.secondPage-swiperBlock .swiper-pagination-bullet-active');
      while (red = red.previousElementSibling) {
        red.classList.add('activeBlack');
      }
    })
  })


  // if (window.matchMedia("(max-width: 500px)").matches) {
  let servicesStepSwiper = new Swiper(".services-steps__swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".services-steps__arrowRight",
      prevEl: ".services-steps__arrowLeft",
    },

  });
  // }

  let textArea = document.querySelectorAll('.textArea')
  let leftBlockArea = document.querySelectorAll('.main-createEmotions__helper2')

  textArea.forEach(e => {
    e.addEventListener("focusin", () => {
      e.classList.add('areaHeight')
      // leftBlockArea.classList.add('leftBlockAreaActive')
      leftBlockArea.forEach(elem => {
        elem.classList.add('leftBlockAreaActive')
      })
    });
    e.addEventListener("focusout", () => {
      e.classList.remove('areaHeight')
      // leftBlockArea.classList.remove('leftBlockAreaActive')
      leftBlockArea.forEach(elem => {
        elem.classList.remove('leftBlockAreaActive')
      })
    });
  })

  let leftBlockContainer = document.querySelector('.leftBlockContainer__text');
  let mainCreate = document.querySelector('#create')

  let mainServices = document.querySelector('#services')

  let firstStep = document.querySelector('#firstStep')

  let mainGallery = document.querySelector('#gallery')

  let mainInContact = document.querySelector('#inContact')

  let partfolioText = document.querySelector('#portfolioLeftContainer')

  const tl8 = gsap.timeline();

  tl8.from('.leftBlockContainer__imgContainer', { opacity: 0, x: -200, duration: 1, delay: 3.4 })


  const tl10 = gsap.timeline();

  tl10.to('.leftBlockContainer__horizontalBorder', { transform: 'scale(1, 1)', duration: 1, delay: 2.4 })
  tl10.to('.leftBlock__verticalBorder', { transform: 'scale(1, 1)', duration: 1, })

  const tl21 = gsap.timeline()

  tl21.fromTo('.leftBlockContainer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })

  if (mainPage) {



    const tl2 = gsap.timeline();

    tl2.from('.main-createEmotions__imgContainer img', { opacity: 0, y: -300, duration: 1.8, delay: 2.4 })

    const tl3 = gsap.timeline();

    tl3.from('.main-createEmotions__subtitle', { opacity: 0, duration: 1.3, delay: 1.3 })

    const tl4 = gsap.timeline();

    tl4.from('.main-createEmotions__title', { opacity: 0, duration: 1.3, delay: 0.7 })






    const tl5 = gsap.timeline();

    tl5.from('.main-solutions__content h2', { opacity: 0 })



    ScrollTrigger.create({
      animation: tl5,
      trigger: '.main-solutions__content',
      start: 'top 90%',
      end: "top 80%",
      // scrub: true,
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })


    const tl7 = gsap.timeline();

    tl7.from('.main-services__borderLine', { width: 0, duration: 1.5, })

    tl7.fromTo(".main-services__btn", { opacity: 0 }, { opacity: 1 })

    ScrollTrigger.create({
      animation: tl7,
      trigger: '.main-services__tabContainer',
      start: 'top 60%',
      end: "top 30%",
    })

    const tl17 = gsap.timeline();

    tl17.fromTo(".main-services__btn", { opacity: 0 }, { opacity: 1, delay: 0.5 })

    ScrollTrigger.create({
      animation: tl17,
      trigger: '.main-services__tabContainer',
      start: 'top 60%',
      end: "top 30%",
    })



    const tl12 = gsap.timeline();

    tl12.fromTo('.main-firstStep__title h2', { opacity: 0, x: 50 }, { opacity: 1, x: 0, delay: 0.2, duration: 0.5 })


    ScrollTrigger.create({
      animation: tl12,
      trigger: '.main-firstStep__content',
      start: 'top 80%',
      end: "top 30%",
    })

    const tl28 = gsap.timeline();

    tl28.fromTo('.main-firstStep__blackLine', { transform: "scale(0, 1)", duration: 1, }, { transform: "scale(1, 1)", duration: 0.6, })

    ScrollTrigger.create({
      animation: tl28,
      trigger: '.main-firstStep__content',
      start: 'top 80%',
      end: "top 30%",
    })
    const tl13 = gsap.timeline();

    tl13.from('.main-gallery__tabsContainer_borderLine', { width: 0, duration: 1.5 })

    ScrollTrigger.create({
      animation: tl13,
      trigger: '.main-gallery__content',
      start: 'top 80%',
      end: "top 30%",
    })


    // const tl14 = gsap.timeline();

    // tl14.fromTo('.main-contact__content', { opacity: 0 }, { opacity: 1 })

    // ScrollTrigger.create({
    //   animation: tl14,
    //   trigger: '.main-contact__content',
    //   start: 'top 70%',
    //   end: "top 60%",
    //   events: "onEnter onLeave onEnterBack onLeaveBack",
    //   toggleActions: "play play reverse reverse",
    // })


    const tl18 = gsap.timeline()

    tl18.fromTo('.main-result__content h2', { opacity: 0 }, { opacity: 1 })

    ScrollTrigger.create({
      animation: tl18,
      trigger: '.main-result__content',
      start: 'top 90%',
      end: "top 80%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
      // scrub: true,
    })




    const tl20 = gsap.timeline()

    tl20.fromTo('.main-firstStep__subtitle', { opacity: 0 }, { opacity: 1 })

    ScrollTrigger.create({
      animation: tl20,
      trigger: '.main-firstStep__subtitle',
      start: 'top 70%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl30 = gsap.timeline()

    tl30.fromTo('.main-firstStep__accordeonContainer', { opacity: 0 }, { opacity: 1 })

    ScrollTrigger.create({
      animation: tl30,
      trigger: '.main-firstStep__subtitle',
      start: 'top 70%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

  }




  if (mainPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-createEmotions__textContainer',
      endTrigger: '.main-solutions',
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })



    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-solutions__content',
      endTrigger: ".main-services",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainCreate.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainCreate.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainCreate.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainCreate.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-services',
      endTrigger: ".main-result",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })


    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-result',
      endTrigger: ".main-firstStep",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })


    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-firstStep',
      endTrigger: ".main-gallery",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = firstStep.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = firstStep.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = firstStep.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = firstStep.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-gallery',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainGallery.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainGallery.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainGallery.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainGallery.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })


    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play none none none",
    })


    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-services',
      endTrigger: ".main-result",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = mainServices.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let portfolioPage = document.querySelector('.portfolio')

  if (portfolioPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.portfolio-content',
      // endTrigger: ".footer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = partfolioText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = partfolioText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = partfolioText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = partfolioText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let secondPage = document.querySelector('.secondPage')
  let secondPageContactsLeftText = document.querySelector('#secondPageContacts')


  if (secondPage) {

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.secondPage-swiperBlock',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play none none none",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = secondPageContactsLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = secondPageContactsLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = secondPageContactsLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = secondPageContactsLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play none none none",
    })
  }

  let servicesLeftBlockText = document.querySelector('#servicesLeftBlockText')
  let servicesPage = document.querySelector('.services')
  let servicesContact = document.querySelector('#servicesInContact')

  if (servicesPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.services',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesLeftBlockText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesLeftBlockText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesLeftBlockText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesLeftBlockText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play none none none",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = servicesContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play none none none",
    })
  }

  let organizationOfSpacePage = document.querySelector('.organizationOfSpace')
  let organizationServicesLeftText = document.querySelector('#organizationServices')
  let organizationInContactLeftText = document.querySelector('#organizationInContact')

  if (organizationOfSpacePage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.organizationOfSpace',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationServicesLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationServicesLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationServicesLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationServicesLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".organizationOfSpace-text",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationInContactLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationInContactLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationInContactLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = organizationInContactLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.organizationOfSpace-text',
      endTrigger: ".footer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let designPage = document.querySelector('.design')
  let designServicesLeftText = document.querySelector('#designServices')
  let designInContact = document.querySelector('#designInContact')

  if (designPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.design',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designServicesLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designServicesLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designServicesLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designServicesLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".organizationOfSpace-text",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = designInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.organizationOfSpace-text',
      endTrigger: ".footer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

  }

  let autorPage = document.querySelector('.autor__position')
  let autorServicesLeftText = document.querySelector('#autorServicesLeftText')
  let autorInContact = document.querySelector('#autorInContact')

  if (autorPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.autor__position',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorServicesLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorServicesLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorServicesLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorServicesLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".organizationOfSpace-text",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = autorInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.organizationOfSpace-text',
      endTrigger: ".footer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let realizationPage = document.querySelector('.realization')
  let realizationServicesLeftText = document.querySelector("#realizationServicesText")
  let realizationInContact = document.querySelector('#realizationInContact')

  if (realizationPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.realization',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationServicesLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationServicesLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationServicesLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationServicesLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".organizationOfSpace-text",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = realizationInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.organizationOfSpace-text',
      endTrigger: ".footer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let pricesPage = document.querySelector('.prices')
  let pricesLeftText = document.querySelector('#pricesLeftText')
  let pricesInContact = document.querySelector('#pricesInContact')

  if (pricesPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.prices',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = pricesInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let blogPage = document.querySelector('.blog')
  let blogLeftText = document.querySelector('#blogLeftText')
  let blogInContact = document.querySelector('#blogInContact')

  if (blogPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.blog',
      endTrigger: ".main-contact",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogLeftText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogLeftText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogLeftText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogLeftText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })

    ScrollTrigger.create({
      animation: tl21,
      trigger: '.main-contact',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = blogInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let articlePage = document.querySelector('.article')
  let articleBlogText = document.querySelector('#articleBlogText')

  if (articlePage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.article-content',
      endTrigger: "#articleBlogText",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = articleBlogText.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = articleBlogText.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = articleBlogText.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = articleBlogText.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }

  let contactsPage = document.querySelector('.contacts')
  let contactsInContact = document.querySelector('#contactsInContact')

  if (contactsPage) {
    ScrollTrigger.create({
      animation: tl21,
      trigger: '.contacts',
      endTrigger: ".main-contact__btnContainer",
      start: 'top 70%',
      end: "top 70%",
      onEnter: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = contactsInContact.innerHTML
      },
      onLeave: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = contactsInContact.innerHTML
      },
      onEnterBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = contactsInContact.innerHTML
      },
      onLeaveBack: function () {
        leftBlockContainer.innerHTML = "";
        leftBlockContainer.innerHTML = contactsInContact.innerHTML
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play restart restart restart",
    })
  }


  if (mainPage) {
    const tl22 = gsap.timeline()

    let kkk = document.querySelector('.main-solutions__content');

    let bbb = kkk.offsetHeight;
    let xxx = (bbb * 0.35);
    let zzz = (bbb * 0.2);
    let lll = (bbb * 1.29);

    tl22.fromTo('.main-solutions__content h2', { y: 0 }, { y: xxx })

    ScrollTrigger.create({
      animation: tl22,
      trigger: '.main-solutions__content',
      // endTrigger: ".main-contact__btnContainer",
      start: '-=42%',
      end: `+=${lll + 'px'}`,
      scrub: true,
    })


    const tl23 = gsap.timeline()


    tl23.fromTo('.main-solutions__subtitleText', { y: 0 }, { y: zzz })



    ScrollTrigger.create({
      animation: tl23,
      trigger: '.main-solutions__content',
      start: `+=${bbb - bbb - (bbb * 0.1141) + "px"}`,
      end: `+=${bbb * 1 + 'px'}`,
      scrub: true,
    })

    const tl24 = gsap.timeline()
    tl24.fromTo('.main-solutions__design', { y: 0 }, { y: zzz })

    ScrollTrigger.create({
      animation: tl24,
      trigger: '.main-solutions__content',
      start: `+=${bbb - bbb - (bbb * 0.1141) + "px"}`,
      end: `+=${bbb * 1 + 'px'}`,
      scrub: true,
    })



    const tl25 = gsap.timeline();

    let count = 0

    ScrollTrigger.create({
      animation: tl25,
      trigger: '.main-solutions__content',
      start: 'top 40%',
      end: 'top 20%',
      onEnter: function () {
        count += 1
        if (count <= 1) {
          setTimeout(() => {

            let solutionImgSwiper = new Swiper('.main-solutions__imgContainer', {
              loop: true,
              speed: 1100,
              allowTouchMove: false,
              effect: "creative",
              creativeEffect: {
                prev: {
                  translate: ["-5%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              },
              autoplay: {
                delay: 6000,
              },
            })

            solutionImgSwiper.autoplay.stop()

            solutionImgSwiper.slideNext()
            solutionImgSwiper.autoplay.start()
          }, 3000)

        }
      },
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })



    let contactHeight = document.querySelector('.main-contact').offsetHeight;
    let mainHeight = document.querySelector('main').offsetHeight;




    let resultContentHeight = document.querySelector('.main-result__content').offsetHeight
    let resultTextHeight = document.querySelector('.main-result__content h2').offsetHeight
    let resultRightBlockHeight = document.querySelector('.main-result__stepsSwiper').offsetHeight
    let resultSubtitle = document.querySelector('.main-result__subtitle').offsetHeight
    let swiperTextHeight = document.querySelector('.main-result__swiperText').offsetHeight


    const tl31 = gsap.timeline({
      pause: true,
      scrollTrigger: {
        trigger: '.main-result__content',
        start: 'top 35%',
        end: 'top -95%',
        scrub: true,
      }
    })

    tl31.fromTo('.main-result__h2Container h2', { y: 0 }, { y: (resultContentHeight - resultTextHeight - swiperTextHeight + 'px') })

  }


  if (portfolioPage) {
    const tl35 = gsap.timeline();

    tl35.from('.main-gallery__tabsContainer_borderLine', { width: 0, duration: 1.5 })

    ScrollTrigger.create({
      animation: tl35,
      trigger: '.main-gallery__tabsContainer',
      start: 'top 80%',
      end: "top 30%",
    })
  }

  if (portfolioPage) {
    const tl40 = gsap.timeline()
    tl40.fromTo('.portfolio-content_position h2', { opacity: 0 }, { opacity: 1, delay: 1 })

    // const tl41 = gsap.timeline()

    // let portfolioContentTitle = document.querySelectorAll('.portfolio-content__title')

    // portfolioContentTitle.forEach(el => {
    //   tl41.fromTo(el, {opacity: 0}, {opacity: 1})

    //   ScrollTrigger.create({
    //     animation: tl41,
    //     trigger: el,
    //     start: 'top 30%',
    //     end: "top 0%",
    //     markers: true
    //   })
    // })

  }

  if (secondPage) {
    const tl41 = gsap.timeline()

    tl41.to('.secondPage-idea__underLine', { transform: 'scale(1, 1)', duration: 1.5 })

    ScrollTrigger.create({
      animation: tl41,
      trigger: '.secondPage-idea__aboutBlock',
      start: 'top 70%',
      end: "top 30%",
    })

    let secondPageIdeaTitle = document.querySelectorAll('.secondPage-idea__title')

    secondPageIdeaTitle.forEach(e => {
      const tl42 = gsap.timeline();

      tl42.from(e, { opacity: 0 })

      ScrollTrigger.create({
        animation: tl42,
        trigger: e,
        start: 'top 90%',
        end: "top 80%",
        // scrub: true,
        events: "onEnter onLeave onEnterBack onLeaveBack",
        toggleActions: "play play reverse reverse",
      })
    })


  }

  let mainContactContent = document.querySelectorAll('.main-contact__content')

  mainContactContent.forEach(e => {
    const tl14 = gsap.timeline();

    tl14.fromTo(e, { opacity: 0 }, { opacity: 1 })

    ScrollTrigger.create({
      animation: tl14,
      trigger: e,
      start: 'top 70%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  })


  if (servicesPage) {
    const tl43 = gsap.timeline()

    tl43.from('.services-header h2', { opacity: 0, delay: 1 })

    ScrollTrigger.create({
      animation: tl43,
      trigger: '.services-header',
      start: 'top 70%',
      end: "top 30%",
    })

    const tl44 = gsap.timeline()

    tl44.from('.services-particular h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl44,
      trigger: '.services-particular',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl45 = gsap.timeline()
    tl45.from('.services-steps h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl45,
      trigger: '.services-steps',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  }

  if (organizationOfSpacePage) {
    const tl46 = gsap.timeline()
    tl46.from('.organizationOfSpace-organization h2', { opacity: 0, delay: 1 })

    const tl47 = gsap.timeline()
    tl47.from('.organizationOfSpace-whyContainer__textContainer h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl47,
      trigger: '.organizationOfSpace-whyContainer__textContainer',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl48 = gsap.timeline()
    tl48.from('.organizationOfSpace-include__text h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl48,
      trigger: '.organizationOfSpace-include__text',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  }

  if (designPage) {
    const tl49 = gsap.timeline()
    tl49.from('.design-header h2', { opacity: 0, delay: 1 })

    const tl50 = gsap.timeline()
    tl50.from('.organizationOfSpace-include__text h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl50,
      trigger: '.organizationOfSpace-include__text',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  }

  if (autorPage) {
    const tl51 = gsap.timeline()
    tl51.from('.autor-header h2', { opacity: 0, delay: 1 })

    const tl52 = gsap.timeline()
    tl52.from('.autor-services__title', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl52,
      trigger: '.autor-services__title',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl53 = gsap.timeline()
    tl53.from('.autor-why h2', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl53,
      trigger: '.autor-why',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  }

  if (realizationPage) {
    const tl54 = gsap.timeline()
    tl54.from('.organizationOfSpace-organization h2', { opacity: 0, delay: 1 })

    const tl55 = gsap.timeline()
    tl55.from('.organizationOfSpace-whyContainer__title', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl55,
      trigger: '.organizationOfSpace-whyContainer__title',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl56 = gsap.timeline()
    tl56.from('.organizationOfSpace-include__text', { opacity: 0 })

    ScrollTrigger.create({
      animation: tl56,
      trigger: '.organizationOfSpace-include__text',
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })
  }

  if (pricesPage) {
    const tl57 = gsap.timeline()
    tl57.from('.prices-main__title', { opacity: 0, delay: 1 })

    const tl58 = gsap.timeline()
    let textTitle = document.querySelectorAll('.prices-main__textTitle')
    tl58.from(textTitle[0], { opacity: 0, delay: 1.5 })

    const tl59 = gsap.timeline()

    tl59.from(textTitle[1], { opacity: 0 })

    ScrollTrigger.create({
      animation: tl59,
      trigger: textTitle[1],
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })

    const tl60 = gsap.timeline()

    tl60.from(textTitle[2], { opacity: 0 })

    ScrollTrigger.create({
      animation: tl60,
      trigger: textTitle[2],
      start: 'top 90%',
      end: "top 60%",
      events: "onEnter onLeave onEnterBack onLeaveBack",
      toggleActions: "play play reverse reverse",
    })



  }

  if (blogPage) {
    const tl61 = gsap.timeline()

    tl61.from('.blog-content h2', { opacity: 0, delay: 1 })

  }

  if (articlePage) {
    const tl62 = gsap.timeline()

    tl62.from('.article-content h2', { opacity: 0, delay: 1 })
  }









})