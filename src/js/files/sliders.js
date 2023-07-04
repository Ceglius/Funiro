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
	if (document.querySelector('.tips__slider')) { 
		new Swiper('.tips__slider', { 
			modules: [Navigation, Pagination],
			observeParents: true,
			observer:true,
			slidesPerView: 3,
			spaceBetween: 32,
            speed: 800,
			loop: true,
            pagination: {
				el: '.slider-tips__dots',
				clickable: true,
			},
            navigation: {
				prevEl: '.tips__slider .slider-arrow__prev',
				nextEl: '.tips__slider .slider-arrow__next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,

				},
				992: {
					slidesPerView: 3,
					spaceBetween: 32,
				},

			},
			
		});
	}
}



window.addEventListener("load", function (e) {
	initSliders();
});