'use strict';

const faqButtons = document.querySelectorAll('.faq__btn');

faqButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		// First method to add a class to a parent
		// btn.parentNode.classList.toggle('active');

		// Second method to add a class to a parent.
		btn.closest('.faq__item').classList.toggle('active');
	});
});
