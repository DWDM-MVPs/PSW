import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Content from './componentes/Content';
import Footer from './componentes/Footer';

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
            <div className="App">
                <Header my_name={this.state.my_name} project_name={this.state.project_name}></Header>
                <Content></Content>
                <Footer my_name={this.state.my_name} project_name={this.state.project_name}></Footer>
            </div>
        );
    }
}
export default App;
