document.addEventListener("DOMContentLoaded", () => {

  let desctopHelper = document.querySelector('.main-services__desctopHelper')
  let acc = document.querySelectorAll(".main-services__btn");


  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      acc.forEach(e => {
        e.classList.remove("activeTab")
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
      loop: true,
      navigation: {
        nextEl: '.main-gallery__buttonPrev',
        prevEl: '.main-gallery__buttonNext',
      },
      breakpoints: {
        850: {
          slidesPerView: 1.4,
          spaceBetween: 30,
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



  let burger = document.querySelectorAll('.header-content__burger')
  let burgerHelper = document.querySelector('.header-menu__helpCrossContainer')
  let burgerTransition = document.querySelector('.header-content__burgerTransition')
  let menuContent = document.querySelector('.header-menu__content')
  let page = document.getElementsByTagName('body')

  burger.forEach(e => {
    e.addEventListener('click', () => {
      menuContent.classList.add('showMenu')
      page[0].classList.add('blockScroll')


    })
  })


  burgerHelper.addEventListener('click', () => {
    menuContent.classList.remove('showMenu')
    page[0].classList.remove('blockScroll')
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
    <span><img src="/assets/images/services/arrowDown.svg"></span>
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

