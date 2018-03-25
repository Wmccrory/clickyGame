import React from "react";
import "./Tile.css";

const Tile = props => (
	<div className = "tile">
		<div className = "tile-img">
			<img alt={props.name} src={props.image} />
		</div>

		<div className = "tile-content">

		</div>

	</div>
)

export default Tile;