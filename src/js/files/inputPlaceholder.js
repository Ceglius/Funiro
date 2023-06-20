function emeilPlaceholder() {
  const input = document.querySelector('input');

  input.addEventListener("focus", function() {
    this.removeAttribute("placeholder");
  });

  input.addEventListener("blur", function() {
    if (!this.value) {
      this.setAttribute("placeholder", "Searh for minimalist chair");
    }
  });
}
emeilPlaceholder()