import Swiper, { Navigation, Pagination,Parallax } from 'swiper';

import 'swiper/swiper-bundle.css';


function initSliders() {

	if (document.querySelector('.main-slider__slider')) { 
		new Swiper('.main-slider__slider', { 
			modules: [Navigation, Pagination, Parallax],
            parallax: true,
			slidesPerView: "auto",
			spaceBetween: 32,
            speed: 800,
			loop: true,
            pagination: {
				el: '.controls-slider-main__dots',
				clickable: true,
			},
            navigation: {
				prevEl: '.slider-main .slider-arrow__prev',
				nextEl: '.slider-main .slider-arrow__next',
			},

		});
	}
	if (document.querySelector('.insparations__slider')) { 
		new Swiper('.insparations__slider', { 
			modules: [Navigation, Pagination, Parallax],
            parallax: true,
			slidesPerView: "auto",
			spaceBetween: 24,
            speed: 800,
			loop: true,
            pagination: {
				el: '.slider-insparations__dots',
				clickable: true,
			},
            navigation: {
				prevEl: '.insparations__slider .slider-arrow__prev',
				nextEl: '.insparations__slider .slider-arrow__next',
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"

			
			// Брейкпоінти
			breakpoints: {
				640: {
	
				},
				768: {
					// spaceBetween: 0,

				},
				992: {

				},
				1268: {

				},
			},
			
			// Події
			on: {

			}
		});
	}
}

function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});