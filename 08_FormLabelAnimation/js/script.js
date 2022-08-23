'use strict';

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
	// Adding individual spans to each letter inside the label
	// Adding transition delay time based on the index of the letter
	// Joining everything
	label.innerHTML = label.innerHTML
		.split('')
		.map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
		.join('');
});
