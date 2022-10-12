const root = document.getElementById("root");
const btn = document.createElement("button");
const text = document.createTextNode("Click me");

btn.appendChild(text);
root.appendChild(btn);

btn.addEventListener("click", () => {
	btn.innerText = "The btn was clicked";
});
