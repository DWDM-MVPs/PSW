import React from 'react';
function HeroInfo(props) {
	return (
		<div cassName="galeria1">
			<img className="imagem" src={props.url} alt="Flash"></img>
			<h3 className="nome">{props.name}</h3>
			<h5 className="poder">{props.super}</h5>
		</div>
	);
}
export default HeroInfo;
