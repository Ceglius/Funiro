function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");


  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
    }
  });
}
burgerMenu();
