document.addEventListener("DOMContentLoaded", () => {

  let desctopHelper = document.querySelector('.main-services__desctopHelper')
  let acc = document.querySelectorAll(".main-services__btn");
  let i;

  for (i = 0; i < acc.length; i++) {
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


  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiperButtonNext',
      prevEl: '.swiperButtonPrev',
    },
    loop: true,
    loopedSlides: 4
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;


})











