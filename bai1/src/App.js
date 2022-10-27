import ImgSrc from "./imgs/drum.png";
import ItemList from "./ItemList";

function App() {
	return (
		<div className="App">
			<h1>
				Drum
				<img src={ImgSrc} alt="logo" />
				Kit
			</h1>
			<ItemList />
		</div>
	);
}

export default App;
