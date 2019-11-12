import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Footer from './componentes/Footer';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            my_name: "André Pinto",
            project_name: "Ligue of Heroes"
        }
    }
    render(){
		return (
			<Router>
				<div className="App">
					<Header my_name={this.state.my_name} project_name={this.state.project_name} />
					<Content />
					<Footer my_name={this.state.my_name} project_name={this.state.project_name} />
				</div>
			</Router>
		);
    }
}
export default App;