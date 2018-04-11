
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

// generate a unique id
export let uniqueId = (prefix) => { 
	let id = new Date().valueOf().toString(36);
	sleep(1);// wait for one millisecond to avoid duplicates
	return (prefix ? prefix + id	: id);
};