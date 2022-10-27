import * as React from "react";

const MyButton = ({ disable, text }) => {
	<button disabled={disable}>{text}</button>;
};

MyButton.defaultProps = {
	text: "My Button",
	disable: false,
};

export default MyButton;
