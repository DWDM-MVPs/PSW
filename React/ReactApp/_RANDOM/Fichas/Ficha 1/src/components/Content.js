import React from 'react';
import '../App.css';

class Content extends React.Component {
	render() {
		return (
			<div>
				<h1>Top 3 Herois</h1>

				<div className="Content">
					<img src="img/superman.jpg" alt="Superman" width="184" height="384" />
					<div>Superman</div>
				</div>

				<div className="Content">
					<img src="img/batman.jpg" alt="Batman" width="184" height="384" />
					<div>Batman</div>
				</div>

				<div className="Content">
					<img src="img/wonderwoman.jpg" alt="Wonder Woman" width="184" height="384" />
					<div>Wonder Woman</div>
				</div>

				<br />
				<img src="img/diagrama.png" className="Diagrama" />
			</div>
		);
	}
}

export default Content;