// Import the slider function from slider.js
import { slider } from './slider.js'

// Get various HTML elements and assign them to variables
const menuBtn = document.querySelector('#menuBtn')
const menu = document.querySelector('#menu')
const closeBtn = document.querySelector('#closeBtn')
const carouselProducts = document.querySelector('#product-carousel')
const slidesProduct = document.querySelectorAll('.products__item')
const prevProductButton = document.querySelector('#product-arrow-left')
const nextProductButton = document.querySelector('#product-arrow-right')
const carouselNews = document.querySelector('#news-carousel')
const slidesNews = document.querySelectorAll('.news__item')
const prevNewsButton = document.querySelector('#news-arrow-left')
const nextNewsButton = document.querySelector('#news-arrow-right')
const footerBtn = document.querySelectorAll('.footer__item-title')
const footerList = document.querySelectorAll('.footer__item-list')
const overlay = document.querySelector('#overlay')
const body = document.querySelector('body')
const carouselHero = document.querySelector('#hero-carousel')
const slidesHero = document.querySelectorAll('.hero__image-slide')
const prevHeroButton = document.querySelector('#hero-arrow-left')
const nextHeroButton = document.querySelector('#hero-arrow-right')

// Add event listener to menu button to toggle menu on and off
menuBtn.addEventListener(
	'click',
	e => {
		menu.classList.add('header__nav--active')
		overlay.classList.add('overlay--active')
		body.classList.add('menu--active')
	},
	{ passive: true }
)

// Add event listener to close button to close the menu
closeBtn.addEventListener(
	'click',
	e => {
		menu.classList.remove('header__nav--active')
		overlay.classList.remove('overlay--active')
		body.classList.remove('menu--active')
	},
	{ passive: true }
)

// Add event listener to each footer button to toggle its
footerBtn.forEach((elementBtn, index) => {
	footerList.forEach((element, key) => {
		if (index === key) {
			elementBtn.addEventListener(
				'click',
				e => {
					element.classList.toggle('footer__item-list--active')
				},
				{ passive: true }
			)
		}
	})
})

// Add global event listener to close menu if click occurs outside of menu and menu button
document.addEventListener(
	'click',
	e => {
		if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
			menu.classList.remove('header__nav--active')
			body.classList.remove('menu--active')
			overlay.classList.remove('overlay--active')
		}
	},
	{ passive: true }
)

// Call slider function to initialize the carousels
slider(carouselProducts, slidesProduct, prevProductButton, nextProductButton, 'product')
slider(carouselHero, slidesHero, prevHeroButton, nextHeroButton, 'hero')
slider(carouselNews, slidesNews, prevNewsButton, nextNewsButton, 'news')
