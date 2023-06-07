'use strict';

const block = document.querySelector('.block');

const input = document.createElement('input');
input.classList.add('input');
block.prepend(input);

const p = document.createElement('p');
p.classList.add('text');
block.append(p);

const debounce = (fn, ms) => {
	let timeOut;

	return function () {
		const fnCall = () => {
			fn.apply(this, arguments);
		};

		clearTimeout(timeOut);

		timeOut = setTimeout(fnCall, ms);
	};
};

const inputElement = document.querySelector('.input');

const updateValue = () => {
	const paragraph = document.querySelector('.text');

	setTimeout(() => {
		paragraph.innerHTML = inputElement.value;
	}, 300);
};

const updateValueDebounce = debounce(updateValue, 300);

inputElement.addEventListener('input', updateValueDebounce);

