const root = document.getElementById("root");
const form = document.querySelector("form");
const inputDOB = document.getElementById("inputDOB");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let dobValue = new Date(inputDOB.value);
	let calcMonthDiff = Date.now() - dobValue.getTime();
	let convertedAge = new Date(calcMonthDiff);
	let year = convertedAge.getUTCFullYear();
	let age = Math.abs(year - 1970);

	result.innerHTML = `Your age is ${age}`;
});
