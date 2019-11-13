import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<h1>{this.props.project_name}</h1>
				<h3>by {this.props.my_name}</h3>

				<div class="topnav">
					<Link to="/">Home</Link>
					<Link to="/dashboard">Dashboard</Link>
				</div>
			</div>
		);
	}
}

export default Header;