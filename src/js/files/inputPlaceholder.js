function emeilPlaceholder() {
  const input = document.querySelector('input[type="email"]');

  input.addEventListener("focus", function() {
    this.removeAttribute("placeholder");
  });

  input.addEventListener("blur", function() {
    if (!this.value) {
      this.setAttribute("placeholder", "Enter your email");
    }
  });
}
emeilPlaceholder()