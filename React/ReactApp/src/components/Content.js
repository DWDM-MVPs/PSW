import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Loader from "../components/Loader";
import heroesList from "../shared/Heroes";
import Dashboard from "./Dashboard";
import HeroInfo from "./HeroInfo";

class Content extends React.Component {
	constructor(props) 
	{
		super(props)
		this.state = 
		{
			list_of_heroes: heroesList,
			favorite_heroes: [1, 5, 6],
			loading: true,
		}
	}

	componentDidMount = () => 
	{
		setInterval(() => 
		{
			this.setState(
			{
				loading: false,
			});
		}, 3000)
	}

	render() 
	{
		if (this.state.loading == true) 
		{
			return (<div><Loader loading={this.state.loading} /></div>)
		}
		else 
		{
			return (
				<Switch>
					<Route exact path="/" render={() =>
						<div className="ContentLoading">
							<h1>Top 3 Herois</h1>

							<HeroInfo hero="Superman" img="img/superman.jpg" />
							<HeroInfo hero="Batman" img="img/batman.jpg" />
							<HeroInfo hero="Wonder Woman" img="img/wonderwoman.jpg" />
							{
								this.state.list_of_heroes.map((heroi, pos) => 
								{
									if (this.state.favorite_heroes.includes(pos)) 
									{
										return (<HeroInfo hero={heroi.name} img={heroi.image} />)
									}
								}
								)
							}
							<br />
							<img src="img/diagrama.png" className="Diagrama" />
						</div>
					}
					/>
					<Route exact path="/dashboard" render={() =>
						<Dashboard list_of_heroes={this.state.list_of_heroes} favorite_heroes={this.state.favorite_heroes} verliherois={this.verliherois} removefav={this.removefav} addfav={this.addfav} />
					}
					/>
				</Switch>
			)
		}
	}
}

export default Content;