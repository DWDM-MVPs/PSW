import React from 'react';

class HeroInfo extends React.Component {
	render() {
		return (
			<div className="Content">
				<img src={this.props.img} alt={this.props.hero} width="184" height="384" />
				<div>{this.props.shero}</div>
			</div>
		);
	}
}

export default HeroInfo;