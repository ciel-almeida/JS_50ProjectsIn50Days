'use strict'

const progressBar = document.querySelector('.progress__bar')
const progressSteps = document.querySelectorAll('.progress__step')
const btnPrevious = document.querySelector('.btn--previous')
const btnNext = document.querySelector('.btn--next')
const btns = document.querySelectorAll('.btn')
let currentProgress = 0

// Function to set the right styles in the progress steps
const updateProgressSteps = (currentProgress) => {
	progressSteps.forEach((step) => {
		step.classList.remove('progress__step--active')
	})
	for (let i = 0; i <= currentProgress; i++) {
		progressSteps[i].classList.add('progress__step--active')
	}
}

// Function to update the width of the progress bar
const updateProgressBar = (currentProgress) => {
	progressBar.style.width = `${currentProgress * 33}%`
}

// Function to disable buttons when the limit is reached
const updateButton = (currentProgress) => {
	if (currentProgress === 3) {
		btnNext.setAttribute('disabled', 'disabled')
	} else if (currentProgress < 3) {
		btnNext.removeAttribute('disabled')
	}
	if (currentProgress === 0) {
		btnPrevious.setAttribute('disabled', 'disabled')
	} else if (currentProgress > 0) {
		btnPrevious.removeAttribute('disabled')
	}
}

// Adding event listeners in the buttons and calling the functions to update the UI
btns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		if (btn.classList.contains('btn--previous')) {
			if (currentProgress === 0) return
			currentProgress--
		}

		if (btn.classList.contains('btn--next')) {
			if (currentProgress === 3) return
			currentProgress++
		}

		updateProgressBar(currentProgress)
		updateProgressSteps(currentProgress)
		updateButton(currentProgress)
	})
})
