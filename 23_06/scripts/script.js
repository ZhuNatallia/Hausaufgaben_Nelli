const formElem = document.querySelector('.workers_form');

let workersArr = [];

const cardsRender = () => {
	const cardscontainer = document.querySelector('.cards_container');
	cardscontainer.innerText = '';
	workersArr.forEach(
		({
			firstname,
			lastname,
			age,
			rate,
			days,
			salary,
			avatar,
			email,
			progress,
		}) => {
			const container = document.createElement('div');
			container.classList.add('card');
			const firstnameElem = document.createElement('p');
			const lastnameElem = document.createElement('p');
			const ageElem = document.createElement('p');
			const rateElem = document.createElement('p');
			const daysElem = document.createElement('p');
			const salaryElem = document.createElement('p');
			const user_avatar = document.createElement('img');
			const user_email = document.createElement('a');
			const progressElem = document.createElement('div');

			firstnameElem.innerText = `First name: ${firstname}`;
			lastnameElem.innerText = `Last name: ${lastname}`;
			ageElem.innerText = `Age: ${age}`;
			rateElem.innerText = `Rate: ${rate}`;
			daysElem.innerText = `Days: ${days}`;
			salaryElem.innerText = `Salary: ${rate * days}`;
			user_avatar.setAttribute('src', avatar);
			user_email.innerText = `E-mail: ${email}`;
			progressElem.innerText = `Progress: ${progress}`;

			container.append(
				user_avatar,
				firstnameElem,
				lastnameElem,
				ageElem,
				rateElem,
				daysElem,
				salaryElem,
				user_email,
				progressElem
			);
			cardscontainer.append(container);
		}
	);
};

formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	const {
		avatar,
		firstname,
		lastname,
		age,
		rate,
		days,
		salary,
		email,
		progress,
	} = event.target; //this ксли не стрелочная
	workersArr.push({
		firstname: firstname.value,
		lastname: lastname.value,
		age: age.value,
		rate: rate.value,
		days: days.value,
		salary: salary.value,
		avatar: avatar.value,
		email: email.value,
		progress: progress.value,
	});
	firstname.value = '';
	lastname.value = '';
	age.value = '';
	rate.value = '';
	days.value = '';
	salary.value = '';
	avatar.value = '';
	email.value = '';
	progress.value = '';
	console.log(workersArr);
	cardsRender();
});
