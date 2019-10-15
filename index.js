'use strict';

function myPromise(){
	return new Promise((resolve)=>{
		resolve('Hello World.');	//resolve の引数に戻したい値
	});
}


myPromise().then((data)=>{
	console.log(data);	// Hello World.
});
