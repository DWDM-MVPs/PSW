import React from 'react';
import HeroInfo from './HeroInfo';
import HerosList from '../shared/Heroes';
import Loader from '../componentes/Loader';
class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list_of_heroes: HerosList,
			favorite_heroes: [1, 5, 7],
			loading: true
		}
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
		while (index < this.state.list_of_heroes.length) {
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
						<button onClick={() => this.random()}>Clica aqui!</button>
						<img class="grafico" alt="Grafico" src="./images/grafico.png"></img>
					</div>
				</div>
			);
		}
    }
}
export default Content;