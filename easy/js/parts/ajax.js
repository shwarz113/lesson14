function ajax() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div");
	statusMessage.classList.add("status");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState == 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				}
				else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for(let i = 0; i < input.length; ++i) {
			input[i].value = "";
		}
	});

	//Home Work
	let formBack = document.getElementById("form"),
		inputBack = formBack.getElementsByTagName("input"),
		statusMessageBack = document.createElement("div");
	statusMessageBack.classList.add("status");

	formBack.addEventListener("submit", (event) => {
		event.preventDefault();
		formBack.appendChild(statusMessageBack);
		statusMessageBack.style.color = "white";
		statusMessageBack.style.paddingTop = 10 + "px";

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(formBack);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessageBack.innerHTML = message.loading;
			} else if (request.readyState == 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessageBack.innerHTML = message.success;
				}
				else {
					statusMessageBack.innerHTML = message.failure;
				}
			}
		}
		for(let i = 0; i < input.length; ++i) {
			input[i].value = "";
		}
	});
}

module.exports = ajax;