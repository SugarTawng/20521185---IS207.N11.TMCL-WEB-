import React from "react";
import ReactDOM from "react-dom/client";

const element = (
	<div
		style={{
			color: "green",
			textAlign: "center",
			fontSize: "15px",
			border: "1px solid green",
			backgroundColor: "#d0f0c0",
		}}
	>
		Green is the prime color of the world
	</div>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
