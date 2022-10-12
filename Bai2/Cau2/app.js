const body = document.querySelector("body");
const h1Tags = document.querySelectorAll("h1");
const h3Tags = document.querySelectorAll("h3");
const h5Tags = document.querySelectorAll("h5");
const pTags = document.querySelectorAll("p");
const spanTags = document.querySelectorAll("span");

body.style.backgroundColor = "#DECDF5";
h1Tags.forEach((h1) => {
	h1.style.color = "#534D56";
});
h3Tags.forEach((h3) => {
	h3.style.color = "#70163C";
});
h5Tags.forEach((h5) => {
	h5.style.color = "#2E0F15";
});
pTags.forEach((p) => {
	p.style.color = "#9DFFF9";
});
spanTags.forEach((span) => {
	span.style.color = "#996888";
});
