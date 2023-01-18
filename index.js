const stepSection = document.querySelector('.section-step');
const stepBtn = document.querySelectorAll('.step-btn');
const step = document.querySelector('.step');
let selected;

stepSection.addEventListener('click', function (event) {
	let target = event.target;

	if (target.classList.contains('step-btn')) {
		highlight(target);
	}
});

function highlight(ele) {
	if (selected) {
		selected.classList.remove('step-clicked');
	}
	selected = ele;
	selected.classList.add('step-clicked');
}
