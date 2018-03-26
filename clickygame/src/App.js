import React, { Component } from 'react';
import './App.css';
import Tile from "./components/Tile";
import tiles from "./tiles.json";

// let shuffled = tiles.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
let correct = 0;
let hintUsed = false;

class App extends Component {

	state = {
		tiles,
		correct
	}

	setPicked = id => {
		const tiles = this.state.tiles;

		const clickedTile = tiles.filter(tile => tile.id === id);

		if (clickedTile[0].picked) {
			correct = 0;
			hintUsed = false;

			for (let i=0;i<tiles.length;i++) {
				document.getElementById(tiles[i].id).removeAttribute("style");
			};
			document.getElementById("hintButton").removeAttribute("style");

			tiles.forEach(function(e){e.picked = false});
			this.setState({ correct });
			tiles.sort(function(a, b){return 0.5 - Math.random()});
			this.setState({ tiles });

			alert("You lose");
		}
		else if (correct < 19) {
			clickedTile[0].picked = true;
			correct++;
			tiles.sort(function(a, b){return 0.5 - Math.random()});
			this.setState({ tiles });
		}
		else {
			for (let i=0;i<tiles.length;i++) {
				document.getElementById(tiles[i].id).removeAttribute("style");
			};
			document.getElementById("hintButton").removeAttribute("style");

			correct = 0;
			this.setState({ correct });
			tiles.forEach(function(e){e.picked = false});
			this.setState({ tiles });

			alert("You win. Now play again.");
		}

	}

	hint = () => {
		if (!hintUsed) {
			for (let i=0;i<tiles.length;i++) {
				if (tiles[i].picked) {
					document.getElementById(tiles[i].id).setAttribute("style", "opacity: 0.3");
				}
			}
			hintUsed = true;
			document.getElementById("hintButton").setAttribute("style", "visibility: hidden")
		}
	}

	render() {
		return (

			<div className="App">
				<h1>ClickHero</h1>
				<h2>Click hero once and only once. If you click the same hero twice you lose</h2>
				<h2>You've clicked {correct} out of 20 heroes</h2>
				<button id="hintButton" onClick={this.hint}>You get one cheatsheet per game, make it worthwhile..</button>

				<div className="Tile-layout">
					{tiles.map(tile => (
						<Tile
							id={tile.id}
							key={tile.id}
							name={tile.name}
							image={tile.image}
							setPicked={this.setPicked}
						/>
					))}
				</div>

				<footer className="footer">
					<h6><a href="https://wmccrory.github.io">© 2018-Will McCrory</a></h6>

					<div>
						<a href = "https://www.linkedin.com/in/william-mccrory-849068154/"><img src = "img/linkedin.png" alt = "linkedin" /></a>

						<a href = "https://github.com/Wmccrory"><img src= "img/github.png" alt = "github" /></a>
					</div>
				</footer>

			</div>
		);
	}
};

export default App;
