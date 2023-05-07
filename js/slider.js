export const slider = (carousel, slides, prevCarouselButton, nextCarouselButton, type) => {
	// Initialize variables to keep track of slider state
	let currentIndex = 0
	let touchStartX = 0
	let touchEndX = 0

	// Set the initial state of the slider
	prevCarouselButton.classList.add('right--inactive')

	// Define a function to move the slider to a specific slide
	const goToSlide = index => {
		// Set the transform property of the carousel element based on the current screen width and slide index
		if (window.innerWidth < 530 || type === 'hero') {
			carousel.style.transform = `translateX(${-index * 100}%)`
		} else if (window.innerWidth > 992) {
			carousel.style.transform = `translateX(${-index * 25}%)`
		} else {
			carousel.style.transform = `translateX(${-index * 50}%)`
		}

		// Update the current index variable and add/remove classes on the previous/next buttons as needed
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
		} else if (window.innerWidth > 992) {
			if (currentIndex > slides.length - 5) {
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

	// Define a function to move the slider to the next slide
	const nextSlide = () => {
		if (window.innerWidth < 530 || type === 'hero') {
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

	// Define a function to move the slider to the previous slide
	const prevSlide = () => {
		if (currentIndex > 0) {
			goToSlide(currentIndex - 1)
		}
	}

	// This code handles touch events, click events on previous and next buttons, and window resizing events for the carousel slider
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

			if (type === 'news' || type === 'hero') {
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
