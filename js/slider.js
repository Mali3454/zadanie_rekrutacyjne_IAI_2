export const slider = (carousel, slides, prevCarouselButton, nextCarouselButton, isActiveInDesktopView) => {
	let currentIndex = 0
	let touchStartX = 0
	let touchEndX = 0

	prevCarouselButton.classList.add('right--inactive')

	const goToSlide = index => {
		if (window.innerWidth < 530) {
			carousel.style.transform = `translateX(${-index * 100}%)`
		} else if (window.innerWidth > 992) {
			carousel.style.transform = `translateX(${-index * 25}%)`
		} else {
			carousel.style.transform = `translateX(${-index * 50}%)`
		}
		currentIndex = index

		if (currentIndex < 1) {
			prevCarouselButton.classList.add('right--inactive')
		} else {
			prevCarouselButton.classList.remove('right--inactive')
		}

		if (window.innerWidth < 530) {
			if (currentIndex > slides.length - 2) {
				nextCarouselButton.classList.add('left--inactive')
			} else {
				nextCarouselButton.classList.remove('left--inactive')
			}
		} else {
			if (currentIndex > slides.length - 3) {
				nextCarouselButton.classList.add('left--inactive')
			} else {
				nextCarouselButton.classList.remove('left--inactive')
			}
		}
	}

	const nextSlide = () => {
		if (window.innerWidth < 530) {
			if (currentIndex < slides.length - 1) {
				goToSlide(currentIndex + 1)
			}
		} else if (window.innerWidth > 992) {
			if (currentIndex < slides.length - 4) {
				goToSlide(currentIndex + 1)
			}
		} else {
			if (currentIndex < slides.length - 2) {
				goToSlide(currentIndex + 1)
			}
		}
	}

	const prevSlide = () => {
		if (currentIndex > 0) {
			goToSlide(currentIndex - 1)
		}
	}

	carousel.addEventListener(
		'touchstart',
		e => {
			touchStartX = e.touches[0].clientX
		},
		{ passive: true }
	)

	carousel.addEventListener(
		'touchend',
		e => {
			touchEndX = e.changedTouches[0].clientX

			if (isActiveInDesktopView) {
				if (touchEndX - touchStartX > 50) {
					prevSlide()
				} else if (touchStartX - touchEndX > 50) {
					nextSlide()
				}
			} else {
				if (touchEndX - touchStartX > 50 && window.innerWidth < 530) {
					prevSlide()
				} else if (touchStartX - touchEndX > 50 && window.innerWidth < 530) {
					nextSlide()
				}
			}
		},
		{ passive: true }
	)

	prevCarouselButton.addEventListener('click', prevSlide)

	nextCarouselButton.addEventListener('click', nextSlide)

	window.addEventListener(
		'resize',
		e => {
			goToSlide(0)
		},
		{ passive: true }
	)
}
