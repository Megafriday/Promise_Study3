'use strict';

function myPromise() {
	return new Promise((resolve) => {
		resolve('Hello World.');
	});
}


async function main() {	// asyncを付けることにより、関数内でawaitが使える
	console.log(await myPromise());
}

main();