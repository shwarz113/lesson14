function modal() {
	let more = document.querySelector(".more"),
	overlay = document.querySelector(".overlay"),
	close = document.querySelector(".popup-close");

more.addEventListener("click", function() {
	more.classList.add("more-splash");
	overlay.style.display = "block";
	document.body.style.overflow = 'hidden';
});

close.addEventListener("click", function() {
	overlay.style.display = "none";
	more.classList.remove("more-splash");
	document.body.style.overflow = '';
});

//Modal for all more
let description_btn = document.querySelectorAll(".description-btn"),
	infoFull = document.querySelector(".info");

	infoFull.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == "description-btn") {
			for (let i = 0; i < description_btn.length; i++) {
				if (target == description_btn[i]) {
					overlay.style.display = "block";
					document.body.style.overflow = 'hidden';
					break;
				}
			}
		}
	});
}

module.exports = modal;