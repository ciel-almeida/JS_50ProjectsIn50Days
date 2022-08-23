'use strict';

const jokeBox = document.querySelector('.dad-jokes__box');
const jokeBtn = document.querySelector('.dad-jokes__btn');

getJoke();

// Addind an event listener to the button to execute the function getJoke
jokeBtn.addEventListener('click', getJoke);

// Function to get a joke from the API
function getJoke() {
	// Configuration necessary for the API
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	// Fetching the data and displaying in the HTML
	fetch('https://icanhazdadjoke.com/', config).then(res => {
		res.json().then(data => {
			console.log(data.joke);
			jokeBox.innerHTML = data.joke;
		});
	});
}
