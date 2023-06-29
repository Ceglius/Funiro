import { removeClasses } from "./functions";
import Handlebars from "handlebars/dist/handlebars.min.js";

window.addEventListener("resize", footerMenuArrow);
window.addEventListener("load", footerMenuArrow);



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
      removeClasses(document.querySelectorAll(".menu__item._hover"), "_hover");
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
    // cart 
    if (targetElement.classList.contains("cart-header__icon") || targetElement.closest(".cart-header__icon")) {
      if (document.querySelector(".cart-list").children.length > 0) {
        document.querySelector(".cart-header").classList.toggle("_active");
      }
      e.preventDefault()
    } else if (!targetElement.closest(".cart-header") && !targetElement.classList.contains("actions-product__btn")) {
        document.querySelector(".cart-header").classList.remove("_active");
      
    }

    //cart delete 
    if (targetElement.classList.contains("cart-list__delete")) {
      const productId = targetElement.closest('.cart-list__item').dataset.cartProductId
      updateCart(targetElement, productId, false)
      e.preventDefault()
    }

    // footer-link
    if (window.innerWidth < 768) {
      if (targetElement.classList.contains("footer-title")) {
        targetElement
          .closest(".menu-footer__column")
          .classList.toggle("_active");
      }
    }

    if (targetElement.classList.contains("products__more")) {
      getProducts(targetElement);
      e.preventDefault();
    }
    if (targetElement.classList.contains("actions-product__btn")) {
      const productId = targetElement.closest(".item-product").dataset
        .productId;
      addToCart(targetElement, productId);
      e.preventDefault();
    }
  }

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

  // get more products
  async function getProducts(buttton) {
    if (!buttton.classList.contains("_hold")) {
      buttton.classList.add("_hold");
      const file = "./assets/data/products.json";

      let response = await fetch(file, {
        method: "GET",
      });

      if (response.ok) {
        let result = await response.json();
        loadProducts(result);
        buttton.classList.remove("_hold");
        buttton.remove();
      } else {
        alert("Something wrong with data");
      }
    }
  }

  function loadProducts(data) {
    const source = document.getElementById("products-more").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(data);
    const container = document.querySelector(".products__items");
    container.insertAdjacentHTML("beforeend", html);
  }

  function addToCart(productButton, productId) {
    if (!productButton.classList.contains("_hold")) {
      productButton.classList.add("_hold");
      productButton.classList.add("_fly");

      const cart = document.querySelector(".cart-header__icon");
      const product = document.querySelector(`[data-product-id="${productId}"]`);
      const productImage = document.querySelectorAll(".item-product__image")[
        productId - 1
      ];
      const productImageFly = productImage.cloneNode(true);
      const productImageFlyWidth = productImage.offsetWidth;
      const productImageFlyHeight = productImage.offsetHeight;
      const productImageFlyTop = productImage.getBoundingClientRect().top;
      const productImageFlyLeft = productImage.getBoundingClientRect().left;

      productImageFly.setAttribute("class", "_flyImage --ibg");
      productImageFly.style.cssText = `
      left: ${productImageFlyLeft}px;
      top: ${productImageFlyTop}px;
      width: ${productImageFlyWidth}px;
      height: ${productImageFlyHeight}px;
      `;
      document.body.append(productImageFly);

      const cartFlyLeft = cart.getBoundingClientRect().left;
      const cartFlyTop = cart.getBoundingClientRect().top;

      productImageFly.style.cssText = `
      left: ${cartFlyLeft}px;
      top: ${cartFlyTop}px;
      width: 0;
      height: 0;
      opacity:0;
      `;

      productImageFly.addEventListener("transitionend", () => {
        if (productButton.classList.contains("_fly")) {
          productImageFly.remove();
          updateCart(productButton, productId);
          productButton.classList.remove("_fly");
        }
      });
    }
  }

  function updateCart(productButton, productId, productAdd = true) {
    const cart = document.querySelector(".cart-header__icon");
    const cartIcon = document.querySelector(".cart-header__icon");
    const cartQuantity = cart.querySelector("span");
    const cartProduct = document.querySelector(
      `[data-cart-product-id="${productId}"]`
    );
    const cartList = document.querySelector(".cart-list");

    // adding
    if (productAdd) {
      if (cartQuantity) {
        cartQuantity.innerHTML = ++cartQuantity.innerHTML;
      } else {
        cartIcon.insertAdjacentHTML("beforeend", "<span>1</span>");
      }
      if (!cartProduct) {
        const product = document.querySelector(`[data-product-id="${productId}"]`);
        const productImage = product.querySelector(".item-product__image").innerHTML;
        const productTitle = product.querySelector(".item-product__title").innerHTML;
        const cartProductContent = `
        <a href="" class="cart-list__image cart-list__image--ibg">${productImage}</a>
        <div class="cart-list__body">
            <a href="#" class="cart-list__title">${productTitle}</a>
            <div class="cart-list__quantity">Quantity<span>1</span></div>
            <a href="#" class="cart-list__delete">Delete</a>
        </div>
       `
        cartList.insertAdjacentHTML("beforeend",`<li data-cart-product-id="${productId}" class="cart-list__item">${cartProductContent}</li>`)
      } else {
        const cartProductQuantity = cartProduct.querySelector(".cart-list__quantity span")
      
        cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML
      }
      productButton.classList.remove("_hold") 
    } else {
      const cartProductQuantity = cartProduct.querySelector(".cart-list__quantity span")
      cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML
      if (!parseInt(cartProductQuantity.innerHTML)) {
        cartProduct.remove()
      } 
      const cartQuantityValue = --cartQuantity.innerHTML;
      
      if (cartQuantityValue) {
        cartQuantity.innerHTML = cartQuantityValue;

      } else {
        cartQuantity.remove()
        cart.classList.remove("_active")
      }
    }
  }
};




// footer arrows
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