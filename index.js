import { slider } from './slider.js'

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

menuBtn.addEventListener('click', e => {
	menu.classList.add('--active')
})

closeBtn.addEventListener('click', e => {
	menu.classList.remove('--active')
})

footerBtn.forEach((elementBtn, index) => {
	footerList.forEach((element, key) => {
		if (index === key) {
			elementBtn.addEventListener('click', e => {
				element.classList.toggle('--active')
			})
		}
	})
})

slider(carouselProducts, slidesProduct, prevProductButton, nextProductButton, false)
slider(carouselNews, slidesNews, prevNewsButton, nextNewsButton, true)
