import React from 'react';

function HeroInfo(props) {
	return (
		<div className="Content">
			<img className="ImagemHeroi" src={props.img} alt={props.hero} />
			<div>{props.shero}</div>
		</div>
	);
}

export default HeroInfo;