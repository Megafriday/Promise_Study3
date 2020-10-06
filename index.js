'use strict';

function myPromise() {
	return new Promise((resolve) => {
		resolve('Hello World.');
	});
}


myPromise()
	.then(data => console.log(data));	// Hello World.