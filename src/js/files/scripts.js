import { isMobile } from "./functions";

// Furniture gallery

const furniture = document.querySelector(".furniture__body");

if (furniture && !isMobile.any() ) {
  const furnitureItems = document.querySelector(".furniture__items");
  const furnitureColumn = document.querySelectorAll(".furniture__column");
  const speed = furniture.dataset.speed;

  let positionX = 0;
  let coordXprocent = 0;

  function mouseGalleryStyle() {
    let furnitureItemWidth = 0;
    furnitureColumn.forEach((el) => {
      furnitureItemWidth += el.offsetWidth;
    });

    const furnitureDiffrent = furnitureItemWidth - furniture.offsetWidth;
    const distX = Math.floor(coordXprocent - positionX);

    console.log(distX);

    positionX = positionX + distX * speed;

    let position = (furnitureDiffrent / 200) * positionX;
 
    furnitureItems.style.transform = `translate3d(${-position}px, 0, 0)`;
      


    if (Math.abs(distX) > 0) {
      requestAnimationFrame(mouseGalleryStyle);
    } else {
      furniture.classList.remove("_init");
    }
  }
  furniture.addEventListener("mousemove", function(e) {
    const furnitureWidth = furniture.offsetWidth;
    const coordX = e.pageX - furnitureWidth / 2;
    coordXprocent = (coordX / furnitureWidth) * 200;

    if (!furniture.classList.contains("_init")) {
      requestAnimationFrame(mouseGalleryStyle);
      furniture.classList.add("_init");
    }
  });
}
