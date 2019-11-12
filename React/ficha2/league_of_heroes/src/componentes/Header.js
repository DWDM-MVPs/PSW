import React from 'react';
import { NavLink } from 'react-router-dom'
class Header extends React.Component {
    render() {
		return (
			<div class="header">
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
				</ul>
                <h1>{this.props.project_name}</h1>
                <h3>{this.props.project_name} by {this.props.my_name}</h3>
            </div>
            );
        }
}
export default Header;