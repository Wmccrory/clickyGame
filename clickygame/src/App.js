import React, { Component } from 'react';
import './App.css';
import Tile from "./components/Tile";
import tiles from "./tiles.json";

class App extends Component {

	state = {
		tiles
	};

	picked = id => {
		const tiles = this.state.tiles.filter(tile => tile.id !== id);

		this.setState({ tiles });
	};

	render() {
		return (
			<div className="App">
				<h1>ClickHero</h1>
				<h2>Click hero once and only once. If you click the same hero twice you lose</h2>
				<h2>You've clicked 0 out of 20 heroes</h2>

				<div className="Tile-layout">
					{this.state.tiles.map(tile => (
						<Tile
							id={tile.id}
							key={tile.id}
							name={tile.name}
							image={tile.image}
						/>
					))}
				</div>

			</div>
		);
	}
}

export default App;
