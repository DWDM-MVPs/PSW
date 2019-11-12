import React from 'react';
import HeroInfo from './HeroInfo';
import HerosList from '../shared/Heroes';
import Loader from '../componentes/Loader';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list_of_heroes: HerosList,
			favorite_heroes: [1, 5, 7],
			loading: true
		}
	}

	verliherois = (id) => {
		var arr_list_of_heroes = this.state.list_of_heroes;
		var arr_favorite_heroes = this.state.favorite_heroes;

		for (let index = 0; index < this.state.list_of_heroes.length; index++) {
			if (id === this.state.list_of_heroes[index].id) {
				arr_list_of_heroes.splice(index, 1);
			}
		}

		for (let index = 0; index < this.state.favorite_heroes.length; index++) {
			if (id === this.state.favorite_heroes[index]) {
				arr_favorite_heroes.splice(index, 1);
			}
		}

		this.setState({
			list_of_heroes: arr_list_of_heroes,
			favorite_heroes: arr_favorite_heroes
		});
	}

	removefav = (id) => {
		var arr_favorite_heroes = this.state.favorite_heroes;
		for (let index = 0; index < this.state.favorite_heroes.length; index++) {
			if (id === this.state.favorite_heroes[index]) {
				arr_favorite_heroes.splice(index, 1);
			}
		}
		this.setState({
			favorite_heroes: arr_favorite_heroes
		});
	}

	addfav = (id) => {
		var arr_favorite_heroes = this.state.favorite_heroes;
		arr_favorite_heroes.push(id);
		this.setState({
			favorite_heroes: arr_favorite_heroes
		});
	}

	componentDidMount = () => {
		setInterval(() => {
			this.setState({
				loading: false
			});
		}, 4500)
	}

	randomNumber() {
		var numeros = [];
		var index = 0;
		while (index < this.state.favorite_heroes.length) {
			var random = Math.floor(Math.random() * this.state.list_of_heroes.length+1);
			numeros[index] = random;
			var repete = false;
			for (var i = 0; i < index; i++) {
				if (numeros[i] === random) {
					repete = true;
					break;
				}
			}
			if (!repete) {
				index++;
			}
		}
		return numeros;
	}

	random = () => {
		this.setState({
			favorite_heroes: this.randomNumber()
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loader loading={this.state.loading}></Loader>
			);
		}
		else {
			return (
				<Switch>
					<Route exact path="/" render={() =>
						<div>
							<div class="content">
								<div class="conteudo">
									<h1 class="titulo">Top-3 Heróis</h1>
									<div>
										<div>
											{
												this.state.favorite_heroes.map((favId) =>
													this.state.list_of_heroes.map((heroi, index) =>
														(favId === heroi.id) && (<HeroInfo key={index} name={heroi.name} url={heroi.image} super={heroi.super_power}></HeroInfo>)
													)
												)
											}
										</div>
									</div>
									<img class="grafico" alt="Grafico" src="./images/grafico.png"></img>
								</div>
							</div>
						</div>}
					/>
					<Route exact path="/dashboard" render={() =>
						<Dashboard list_of_heroes={this.state.list_of_heroes} favorite_heroes={this.state.favorite_heroes} verliherois={this.verliherois} removefav={this.removefav} addfav={this.addfav}></Dashboard>
					}
					/>
				</Switch>
				
			);
		}
    }
}
export default Content;