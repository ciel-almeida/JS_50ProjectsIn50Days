'use strict';

const smallCups = document.querySelectorAll('.cup--small');
const liters = document.querySelector('.cup__liters');
const percentage = document.querySelector('.cup__percentage');
const remained = document.querySelector('.cup__remained');

updateBigCup();

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => highlightCup(index));
});

function highlightCup(index) {
	// Getting the cup clicked and the next sibling after him
	const currentCup = smallCups[index];
	const nextCup = smallCups[index].nextElementSibling;

	// If the next sibling is filled the index is decreased to remove the effect on him
	if (currentCup.classList.contains('cup--full') && !nextCup.classList.contains('cup--full')) {
		index--;
	}

	// Looping through the small cups to add or remove the full cup effect based on the index defined before
	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add('cup--full');
		} else {
			cup.classList.remove('cup--full');
		}
	});

	// Upadating the big cup
	updateBigCup();
}

function updateBigCup() {
	// Getting the current number of full cups and the total
	const fullCups = document.querySelectorAll('.cup--small.cup--full').length;
	const totalCups = smallCups.length;

	// Hide the percentage if there is no fulled cups
	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		// Defines the height and the content of the percentage div based on the cups
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	// If all cups are full, the remained indicator is hidden
	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		// Calculates the remaining liters
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
