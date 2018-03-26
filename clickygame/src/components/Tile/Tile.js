import React from "react";
import "./Tile.css";

const Tile = props => (
	<div className = "tile" id={props.id} onClick={() => props.setPicked(props.id)}>
		<div className = "tile-img">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
)

export default Tile;