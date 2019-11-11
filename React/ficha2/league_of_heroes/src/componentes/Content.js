import React from 'react';
import HeroInfo from './HeroInfo';
import HerosList from '../shared/Heroes';
class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list_of_heroes: HerosList,
			favorite_heroes: [1,5,6]
		}
	}

	randomNumber() {
		var numeros = [];
		var index = 0;
		while (index < this.state.favorite_heroes.length) {
			var random = Math.floor(Math.random() * this.state.favorite_heroes.length + 1);
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
        return (
            <div class="content">
				<h1>Top-3 Heróis</h1>
				<div class="galeria">
					<div class="galeria0">
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
				<button onClick={() => this.random()}>Clica aqui!</button>
            </div>
        );
    }
}
export default Content;