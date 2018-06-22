function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			if (restDays.value =='' || persons.value =='' || (personsSum ^ 0) != personsSum || (this.value.indexOf("e") != -1) || (this.value.indexOf("+") != -1)) {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			if (restDays.value =='' || persons.value =='' || (personsSum ^ 0) != personsSum || (this.value.indexOf("e") != -1) || (this.value.indexOf("+") != -1)) {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener("change", function() {
			if (restDays.value =='' || persons.value =='' || (personsSum ^ 0) != personsSum || (persons.value.indexOf("e") != -1) || (restDays.value.indexOf("e") != -1) || (persons.value.indexOf("+") != -1) || (restDays.value.indexOf("+") != -1)) {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
}

module.exports = calc;