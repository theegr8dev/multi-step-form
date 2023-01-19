const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.back-btn');
// Section
const stepSection = document.querySelector('.section-step');
const section1 = document.querySelector('.section-personal');
const section2 = document.querySelector('.section-plan');
const section3 = document.querySelector('.section-add-on');
const section4 = document.querySelector('.section-finishing');
let selected;
let selectedSection = section1;
console.log(selectedSection);
stepSection.addEventListener('click', function (event) {
	let target = event.target;
	if (target.classList.contains('step-btn')) {
		highlight(target);
		if (target.innerHTML === '1') {
			switchStep(section1);
		}
		if (target.innerHTML === '2') {
			switchStep(section2);
		}
		if (target.innerHTML === '3') {
			switchStep(section3);
		}
		if (target.innerHTML === '4') {
			switchStep(section4);
		}
	}
});
nextBtn.addEventListener('click', function () {
	console.log(selectedSection);
});

function switchStep(section) {
	selectedSection.classList.add('hide');
	selectedSection = section;
	selectedSection.classList.remove('hide');
}

function highlight(ele) {
	if (selected) {
		selected.classList.remove('step-clicked');
	}
	selected = ele;
	selected.classList.add('step-clicked');
}
