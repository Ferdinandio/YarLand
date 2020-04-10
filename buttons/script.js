let ourServices = document.querySelector('#ourServices');
let arrowDown = document.querySelector('#arrowDown');
let corner = document.querySelector('#corner');

let ourServPage = document.querySelectorAll('section');

arrowDown.addEventListener('click', function() {
	document.body.scrollTop = ourServPage[0].scrollIntoView(top);
});

ourServices.addEventListener('click', function() {
	document.body.scrollTop = ourServPage[1].scrollIntoView(top);
});

corner.addEventListener('click', function() {
	window.scrollTo(0, 0);
});

