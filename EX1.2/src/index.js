import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MyButton from "./MyButton";
import MyList from "./MyList";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appState = {
	text: "My Button",
	disable: true,
	items: ["First", "Second", "Third"],
};

function render(props) {
	root.render(
		<main>
			<MyButton text={props.text} disable={props.disable} />
			<MyList items={props.items} />
		</main>
	);
}
render(appState);

setTimeout(() => {
	appState.disable = false;
	appState.items.push("Fourth");
}, 1000);
