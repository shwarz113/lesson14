function timer() {
	let deadline = '2018-06-24';

	function getTimeRemaining (endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) %60 ),
			hours = Math.floor( t/(1000*60*60) );

		return {
			"total": t,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if (t.hours < 10) t.hours = "0" + t.hours;
			if (t.minutes < 10) t.minutes = "0" + t.minutes;
			if (t.seconds < 10) t.seconds = "0" + t.seconds;
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		};

		updateClock();
		var timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);
}

module.exports = timer;