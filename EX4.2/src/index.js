import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Button } from "antd";
import "antd/dist/antd.css";

const handleClick = () => {
	alert("Alert!!!");
};
const element = (
	<Button style={{ margin: "10px 10px" }} type="primary" onClick={handleClick}>
		Alert me!
	</Button>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
