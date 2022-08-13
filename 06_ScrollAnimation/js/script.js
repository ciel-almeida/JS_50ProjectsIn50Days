'use strict';

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxPosition);

checkBoxPosition();

function checkBoxPosition() {
	// Getting 80% of the window height
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach(box => {
		// Current position of the top of the box
		const boxTop = box.getBoundingClientRect().top;

		// When the top of the box hits the 80% of the window, the animation is fired
		if (boxTop < triggerBottom) {
			box.classList.add('box--active');
		} else {
			box.classList.remove('box--active');
		}
	});
}
