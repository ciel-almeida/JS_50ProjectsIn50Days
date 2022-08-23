'use strict';

const container = document.querySelector('.container');
const soundList = ['cavalo', 'elegosta', 'pare', 'ui', 'nao', 'queisso', 'tome'];

soundList.forEach(sound => {
	insertAudioElement(container, sound);

	// Getting the audio and button inserted before
	const button = document.querySelector(`.btn--${sound}`);
	const audioElement = document.querySelector(`.audio--${sound}`);

	// Event listener added to the button to play the audio element
	button.addEventListener('click', function () {
		stopAllSounds();
		audioElement.play();
	});
});

// Insert a button and an audio element with a class name and source defined by parameters
function insertAudioElement(container, elementName) {
	container.insertAdjacentHTML(
		'beforeend',
		`
        <button class="btn btn--${elementName}">${elementName}</button>
        <audio class="audio audio--${elementName}" src="audios/${elementName}.mp3"></audio>
    `
	);
}

// Stops all sounds and return the current time of the audio to the start
function stopAllSounds() {
	soundList.forEach(sound => {
		const audio = document.querySelector(`.audio--${sound}`);
		audio.pause();
		audio.currentTime = 0;
	});
}
