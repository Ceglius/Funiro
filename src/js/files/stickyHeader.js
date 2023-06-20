function stickyHeader() {
  const header = document.querySelector(".header");
  let scrollPosition = window.scrollY;
  let previousScrollPosition = scrollPosition;

  window.addEventListener("scroll", function() {
    const currentScrollPosition = window.scrollY;;

    if (currentScrollPosition < previousScrollPosition) {
      // Scrolling down
      header.classList.remove("hidden");
    } else {
      // Scrolling up
      header.classList.add("hidden");
    }
    previousScrollPosition = currentScrollPosition;
  });
}

stickyHeader()