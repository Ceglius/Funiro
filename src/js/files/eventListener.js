import { isMobile } from "./functions";
import { removeClasses } from "./functions";

window.onload = function() {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    // sub menu
    if (isMobile.any()) {
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
  }
};
