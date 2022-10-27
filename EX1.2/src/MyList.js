import * as React from "react";

class MyList extends React.Component {
	render() {
		const { items } = this.props;
		return (
			<ul>
				{items.map((i) => {
					return <li key={i}>{i}</li>;
				})}
			</ul>
		);
	}
}
export default MyList;
