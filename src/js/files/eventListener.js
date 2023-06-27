

import { removeClasses } from "./functions";

window.addEventListener("resize", footerMenuArrow);

window.onload = function() {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    // sub menu
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item._hover").length > 0
      ) {
        removeClasses(
          document.querySelectorAll(".menu__item._hover"),
          "_hover"
        );
      }
    

    // search form
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } else if (
      !targetElement.closest(".search-form") &&
      document.querySelector(".search-form._active")
    ) {
      removeClasses(
        document.querySelectorAll(".search-form._active"),
        "_active"
      );
    }

    // footer-link
    if (window.innerWidth < 768) {
      if (targetElement.classList.contains("footer-title")) {
        targetElement
          .closest(".menu-footer__column")
          .classList.toggle("_active");
      }
    }
  }
};

// header
const headerElement = document.querySelector(".header");
const callback = function(entries, observer) {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove("_scroll");
  } else {
    headerElement.classList.add("_scroll");
  }
};
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);



function footerMenuArrow() {
  if (window.innerWidth < 768) {
    document
      .querySelectorAll(".menu-footer__title")
      .forEach((el) => el.classList.add("_icon-arrow-down"));
  } else {
    removeClasses(
      document.querySelectorAll(".menu-footer__title,_icon-arrow-down"),
      "_icon-arrow-down"
    );
  }
}

footerMenuArrow();
