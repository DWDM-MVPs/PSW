import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="Page">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default App;