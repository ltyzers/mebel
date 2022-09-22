let mainMenu = document.querySelector(".header__list");
let mainHamburger = document.querySelector(".hamburger");

mainHamburger.addEventListener("click", () => {
  mainMenu.classList.toggle("header__list--active");
  mainHamburger.classList.toggle("hamburger--active");
});
/*
$('.reviews__items').slick({
    nextArrow: document.getElementById('btn-next'),
    prevArrow: document.getElementById('btn-prev'),
    mobileFirst: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 'unslick'
        }
    }]
});*/

let btnWrite = document.querySelectorAll(".catalogue__element-button");
let modal = document.querySelector(".modal");
for (let btn of btnWrite) {
  btn.addEventListener("click", () => {
    let a = btn.getAttribute("id");
    if (a == "btn-kid") {
      $("#name").val("Детская");
    } else if (a == "btn-closet") {
      $("#name").val("Шкаф");
    } else if (a == "btn-kitchen") {
      $("#name").val("Кухня");
    }
    modal.classList.toggle("modal--active");
    $(".modal__input-label-pers-name").focus();
  });
}
let btn_close = document.getElementById("btn-close");
btn_close.addEventListener("click", () => {
  modal.classList.toggle("modal--active");
});

let menuLinks = document.querySelectorAll(".header__link");
for (let menuLink of menuLinks) {
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();
    let scrollToElem = menuLink.getAttribute("href");
    let coordinates = document.querySelector(scrollToElem).offsetTop;
    window.scrollTo({
      top: coordinates - 100,
      behavior: "smooth",
    });
    mainMenu.classList.toggle("header__list--active");
    mainHamburger.classList.toggle("hamburger--active");
  });
}
