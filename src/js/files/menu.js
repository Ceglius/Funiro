function menuIfdeviceHasHoverEfect() {
  const menu = document.querySelector(".menu");

  menu.addEventListener("click", function(event) {
    const target = event.target;
    const menuItem = target.closest(".menu__item");
    const submenu = menuItem.querySelector(".menu__submenu");
      
   
    if (submenu && !matchMedia("(hover:hover)").matches) {
      event.preventDefault();
      menuItem.classList.toggle("active");
      submenu.style.display = menuItem.classList.contains("active")
        ? "block"
        : "none";
      
        const submenuRect = submenu.getBoundingClientRect();
        const isSubmenuOverflowing = submenuRect.right > document.body.clientWidth;
  
        if (isSubmenuOverflowing) {
          submenu.classList.add('right-aligned');
        } else {
          submenu.classList.remove('right-aligned');
        }
    }
  });

  document.addEventListener("click", function(event) {
    const target = event.target;
    const isMenuClicked = target.closest(".menu");

    if (!isMenuClicked) {
      const activeItems = menu.querySelectorAll(".menu__item.active");

      for (const activeItem of activeItems) {
        activeItem.classList.remove("active");
        const submenu = activeItem.querySelector(".menu__submenu");
        if (submenu) {
          submenu.style.display = "none";
        }
      }
    }
  });
}

menuIfdeviceHasHoverEfect();
