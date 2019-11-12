import React from 'react';
function HeroInfo(props) {
	return (
		<div className="galeria1">
			<img className="imagem" src={props.url} alt={props.name}></img>
			<h3>{props.name}</h3>
			<h5>{props.super}</h5>
		</div>
	);
}
export default HeroInfo;
