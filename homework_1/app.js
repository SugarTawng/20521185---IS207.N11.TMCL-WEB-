var darkMode = document.getElementById("darkMode");
var body = document.querySelector("body");
darkMode.addEventListener("click", () => {
	body.classList.toggle("darkMode");
});
