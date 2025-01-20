import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const hero = {
	init() {
		this.slider();
	},

	slider() {
		const swiper = new Swiper('.js_hero-swiper', {
			modules: [Navigation],
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			watchOverflow: true,
			watchSlidesVisibility: true,
			autoplay: false,
			// autoplay: {
			// 	delay: 3000,
			// },
			// pagination: {
			// 	el: '.swiper-pagination',
			// },
			navigation: {
				nextEl: '.js_hero-slider-next',
				prevEl: '.js_hero-slider-prev',
			},
			breakpoints: {
				// 1280: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 0,
				// },
			},
			on: {
				// events
			},
		});
	},
}
