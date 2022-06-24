const formElem = document.querySelector('.workers_form');

let workersArr = [];

const cardsRender = () => {
	const cardscontainer = document.querySelector('.cards_container');
	cardscontainer.innerText = '';
	workersArr.forEach(({ firstname, lastname, age }) => {
		const container = document.createElement('div');
		const firstnameElem = document.createElement('p');
		const lastnameElem = document.createElement('p');
		const ageElem = document.createElement('p');

		firstnameElem.innerText = `First name: ${firstname}`;
		lastnameElem.innerText = `Last name: ${lastname}`;
		ageElem.innerText = `Age: ${age}`;

		container.append(firstnameElem, lastnameElem, ageElem);
		cardscontainer.append(container);
	});
};

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
	cardsRender();
});
