const result = document.getElementById("result");
window.addEventListener("resize", (e) => {
	let windowWidth = e.target.innerWidth;
	let windowHeight = e.target.innerHeight;
	result.innerHTML = `${windowWidth} - ${windowHeight}`;
});
