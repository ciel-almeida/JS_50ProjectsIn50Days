'use strict'

const cards = document.querySelectorAll('.card')

const removeActiveClasses = () => {
	cards.forEach((card) => {
		card.classList.remove('card--active')
	})
}

// Looping through the nodelist of cards
cards.forEach((card) => {
	// Adding event listeners in each card
	card.addEventListener('click', () => {
		// Removing the active classes
		removeActiveClasses()
		// Adding the active class in the card
		card.classList.add('card--active')
	})
})
