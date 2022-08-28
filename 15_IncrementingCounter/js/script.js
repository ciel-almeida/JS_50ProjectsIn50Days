'use strict';

const counters = document.querySelectorAll('.counter__number');

function updateCounter(counter, target) {
	// Using setTimeout to repeat the function
	setTimeout(() => {
		const currentValue = +counter.innerText;
		//Multiplying the current value by 1%
		const newValue = +currentValue + target * 0.01;

		// while the value is below the target, the updateCounter function is called again
		if (newValue <= target) {
			// Incremented value by 1% is inserted in the interface
			counter.innerText = newValue;
			updateCounter(counter, target);
		}
	}, 10);
}

counters.forEach(counter => {
	counter.innerText = '0';

	// Getting the target value from the data attribute and transforming to a number
	const target = +counter.getAttribute('data-target');
	updateCounter(counter, target);
});
