'use strict';

function myPromise(){
	return new Promise((resolve)=>{
		resolve('Hello World.'); //resolve の引数に戻したい値
	});
}


async function myAsync(){	// asyncを付けることにより、関数内でawaitが使える
	console.log(await myPromise());
}

myAsync();