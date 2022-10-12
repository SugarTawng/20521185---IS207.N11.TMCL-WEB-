const root = document.getElementById("root");
const form = document.createElement("form");
const btn = document.createElement("button");
const text = document.createTextNode("Click me");

btn.appendChild(text);
form.appendChild(btn);
root.appendChild(form);

btn.addEventListener("click", () => {
	document.write(`Value of the button is the string: "${btn.textContent}"`);
});
