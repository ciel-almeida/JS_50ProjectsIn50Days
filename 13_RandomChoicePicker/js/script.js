'use strict';

const textarea = document.querySelector('.choice-picker__textarea');
const tagsBox = document.querySelector('.choice-picker__tag-box');

textarea.focus();

// Adding an event listener to execute every time that a key is released
textarea.addEventListener('keyup', e => {
	// Updates the tags with the new key after some validations
	createTags(e.target.value);

	// Executes the function that pick a tag when enter is pressed
	if (e.key === 'Enter') {
		textarea.value = '';
		randomSelect();
	}
});

// Validate the tags and creates the array of the choices to be inserted later
function createTags(input) {
	// Clean the tags filtering empty ones
	const tags = input
		.split(',')
		.filter(tag => tag.trim() !== '')
		.map(tag => tag.trim());
	insertTags(tags);
}

// Receives the validated array of createTags and inserts the tags in the HTML
function insertTags(choicesList) {
	tagsBox.innerHTML = '';
	choicesList.forEach(choice => {
		tagsBox.insertAdjacentHTML(
			'beforeend',
			`<span class="choice-picker__tag-item">${choice}</span>`
		);
	});
}

// Creates the effect before and picks one tag
function randomSelect() {
	// Quantity of times that the interval will be repeated before the clearInterval
	const times = 30;

	// Interval that repeats itself every 100 miliseconds amd creates an effect in the tags
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		// Adding the active class to the picked tag
		highlightTag(randomTag);

		// Removing the active class in the picked tag after 100 miliseconds
		setTimeout(() => {
			unHighlightTag(randomTag);
		}, 100);
	}, 100);

	// Code that is executed after 30 repetitions of the interval
	setTimeout(() => {
		// Stop the interval that the creates the visual effect
		clearInterval(interval);

		// Code that picks the tag and defines the winner
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100);
	}, 100 * times);
}

// Auxiliar funtions of the randomSelect function. Pick tags, highlight an unhighlitht
function pickRandomTag() {
	const tags = document.querySelectorAll('.choice-picker__tag-item');

	// Picking a random number between 0 and the last number of the tags list
	const chosenTag = tags[Math.floor(Math.random() * tags.length)];
	return chosenTag;
}

function highlightTag(tag) {
	tag.classList.add('choice-picker__tag-item--active');
}

function unHighlightTag(tag) {
	tag.classList.remove('choice-picker__tag-item--active');
}
