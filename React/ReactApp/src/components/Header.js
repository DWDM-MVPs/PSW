import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>{this.props.project_name}</h1>
				<h3>by {this.props.my_name}</h3>
			</div>
		);
	}
}

export default Header;