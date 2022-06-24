const formElem = document.querySelector('.workers_form');

let workersArr = [];

formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	const { firstname, lastname, age } = event.target; //this ксли не стрелочная
	workersArr.push({
		firstname: firstname.value,
		lastname: lastname.value,
		age: age.value,
	});
	firstname.value = '';
	lastname.value = '';
	age.value = '';
	console.log(workersArr);
});
