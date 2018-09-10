// A Promise can have four states:
//	Fulfilled - The action related to the promise succeeded.  Also known as "resolved".
//	Rejected - The action related to the promise failed.
//	Pending - The promise has not yet fulfilled or rejected.
//	Settled - The promise has either fulfilled or rejected.

new Promise(function(resolve, reject){
	resolve('hi'); // works
	resolve('bye'); // can't happen a second time
});

// ^^ Example of a promise constructor.  Note promise cannot be settled more than once.  Compare to an event listener, where it may miss an event
// if the listener doesn't load before the event triggers, but will respond to every event, not only one.

// Promises execute in the main thread, which means they are still potentially blocking. If the work in the promise takes a long time, it could
// still stop the page from rendering.  If so, framerate will be a problem.

var promise = new Promise(function(resolve[, reject]){
	var value = doSomething();
	if(thingWorked){
		resolve(value);
	} else if (somethingWentWrong){
		reject();
	}
}).then(function(value){
	// success!
	return nextThing(value);
}).catch(rejectFunction);

// ^^ Basic Syntax ^^

new Promise(function(resolve, reject){
	var img = document.createElement('img');
	img.src = 'image.jpg';
	img.onload = resolve;
	img.onerror = reject;
	document.body.appendChild(img);
})
.then(finishLoading)
.catch(showAlternateImage);



new Promise(function(resolve){
	console.log('first');
	resolve();
	console.log('second');
}).then(function(){
	console.log('third');
});