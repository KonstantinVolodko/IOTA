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

      let panel = this.nextElementSibling;
      desctopHelper.innerHTML = panel.innerHTML
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  if (acc.length > 0) {
    acc[0].click()
  }



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
    // spaceBetween: 60,
    // centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;




  let accrordeonBtn = document.querySelectorAll(".main-firstStep__accrordeonBtn");

  for (let i = 0; i < accrordeonBtn.length; i++) {
    accrordeonBtn[i].addEventListener("click", function () {
      // this.classList.toggle("activeTab");
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

  document.body.style.setProperty("--scrollWidth", scrollWidth)

  burger.forEach(e => {
    e.addEventListener('click', () => {
      menuContent.classList.add('showMenu')
      page[0].classList.add('blockScroll')
      headerPadding.style.marginRight = scrollWidth


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


if (window.matchMedia("(max-width: 500px)").matches) {
  let servicesStepSwiper = new Swiper(".services-steps__swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".services-steps__arrowRight",
      prevEl: ".services-steps__arrowLeft",
    },

  });
}

let textArea = document.querySelectorAll('.textArea')

textArea.forEach(e => {
  e.addEventListener("focusin", () => e.classList.add('areaHeight'));
  e.addEventListener("focusout", () => e.classList.remove('areaHeight'));
})

let leftBlockContainer = document.querySelector('.leftBlockContainer__text');
let mainCreate = document.querySelector('#create')

let mainServices = document.querySelector('#services')

let firstStep = document.querySelector('#firstStep')

let mainGallery = document.querySelector('#gallery')

let mainInContact = document.querySelector('#inContact')


const myObserver = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = ""
  }
})

const myEl = document.querySelector('.main-createEmotions');

myObserver.observe(myEl);



const myObserver1 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = mainCreate.innerHTML
  }
})

const myEl1 = document.querySelector('.main-solutions__content');

myObserver1.observe(myEl1);

const myObserver2 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    
    leftBlockContainer.innerHTML = mainServices.innerHTML
  }
})

const myEl2 = document.querySelector('.main-services__content');

myObserver2.observe(myEl2);


const myObserver3 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = "";
  }
})

const myEl3 = document.querySelector('.main-result__content');

myObserver3.observe(myEl3);



const myObserver4 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = firstStep.innerHTML;
  }
})

const myEl4 = document.querySelector('.main-firstStep__content');

myObserver4.observe(myEl4);



const myObserver5 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = mainGallery.innerHTML;
  }
})

const myEl5 = document.querySelector('.main-gallery__content');

myObserver5.observe(myEl5);


const myObserver6 = new IntersectionObserver(elements => {
  if (elements[0].intersectionRatio !== 0) {
    const tl = gsap.timeline();
    tl.from('.leftBlockContainer__text', {opacity: 0, y: 100})
    leftBlockContainer.innerHTML = mainInContact.innerHTML;
  }
})

const myEl6 = document.querySelector('.main-contact_position');

myObserver6.observe(myEl6);


const tl2 = gsap.timeline();

tl2.from('.main-createEmotions__imgContainer img', {opacity: 0, y: -600, duration: 1})

const tl3 = gsap.timeline();

tl3.from('.main-createEmotions__subtitle', {opacity: 0, x: 600, duration: 1})

const tl4 = gsap.timeline();

tl4.from('.main-createEmotions__title', {opacity: 0, y: 300, duration: 1})

const tl5 = gsap.timeline();

tl5.from('.main-solutions__content', {opacity: 0})

const tl8 = gsap.timeline();

tl8.from('.leftBlockContainer__imgContainer', {opacity: 0, y: 200, duration: 1})

const tl9 = gsap.timeline();

tl9.from('.leftBlockContainer__horizontalBorder', {width: 0, duration: 0.5, delay: 1})

const tl10 = gsap.timeline();

tl10.from('.leftBlock__verticalBorder', {height: 0, duration: 0.5, delay: 1})



ScrollTrigger.create({
  animation: tl5,
  trigger: '.main-solutions__content',
  start: 'top 90%',
  end: "top 70%",
  scrub: true,
})

const tl6 = gsap.timeline();

tl6.from('.main-solutions__linkUnderline', {width: 0, duration: 1.5,})

ScrollTrigger.create({
  animation: tl6,
  trigger: '.main-solutions__watchPortfolioContainer',
  start: 'top 80%',
  end: "top 60%",
})

const tl7 = gsap.timeline();

tl7.from('.main-services__borderLine', {width: 0, duration: 1.5,})

ScrollTrigger.create({
  animation: tl7,
  trigger: '.main-services__tabContainer',
  start: 'top 60%',
  end: "top 30%",
})


const tl11 = gsap.timeline();

tl11.from('.main-result__content h2', {opacity: 0, x: 100, duration: 0.6})
tl11.from('.main-result__stepsSwiper', {opacity: 0, x: -100, duration: 0.6})

ScrollTrigger.create({
  animation: tl11,
  trigger: '.main-result__content',
  start: 'top 80%',
  end: "top 60%",
})


const tl12 = gsap.timeline();

tl12.from('.main-firstStep__content', {opacity: 0})

ScrollTrigger.create({
  animation: tl12,
  trigger: '.main-firstStep__content',
  start: 'top 80%',
  end: "top 30%",
  scrub: true,
})


const tl13 = gsap.timeline();

tl13.from('.main-gallery__tabsContainer_borderLine', {width: 0, duration: 1.5})

ScrollTrigger.create({
  animation: tl13,
  trigger: '.main-gallery__content',
  start: 'top 80%',
  end: "top 30%",
})


const tl14 = gsap.timeline();

tl14.from('.main-contact__content', {opacity: 0})

ScrollTrigger.create({
  animation: tl14,
  trigger: '.main-contact__content',
  start: 'top 90%',
  end: "top 70%",
  scrub: true,
})

// const tl1 = gsap.timeline();

// tl1.from('.leftBlockContainer__text', {opacity: 0, y: 100})

// ScrollTrigger.create({
//   animation: tl1,
//   trigger: '.main-services',
//   start: 'top 70%',
//   end: "top 10%",
//   scrub: true,
//   markers: true,
//   onEnter: function(){
//     leftBlockContainer.innerHTML = mainServices.innerHTML
//   },
// })













})