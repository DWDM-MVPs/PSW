import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			my_name: "Miguel Campos",
			project_name: "League of Heroes"
		}
	}

	render() {
		return (
			<div className="Page">
				<Router>
					<Header my_name={this.state.my_name} project_name={this.state.project_name} />
					<Content />
					<Footer my_name={this.state.my_name} project_name={this.state.project_name} />
				</Router>
			</div>
		);
	}
}

export default App;