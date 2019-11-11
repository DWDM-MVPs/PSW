import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

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
			<div onLoad="f_load" className="Page">
				<Header my_name={this.state.my_name} project_name={this.state.project_name} />
				<Content />
				<Footer my_name={this.state.my_name} project_name={this.state.project_name} />
			</div>
		);
	}
}

export default App;