import React from 'react';
import '../App.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="Footer">
				<p>{this.props.project_name} - Copyright (c) 2019 {this.props.my_name}</p>
			</div>
		);
	}
}

export default Footer;