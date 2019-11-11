import React from 'react';
import '../App.css';
import HeroInfo from "./HeroInfo";
import heroesList from "../shared/Heroes";

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list_of_heroes: heroesList,
			favorite_heroes: [1, 5, 6],
		}
	}

	render() {
		return (
			<div>
				<h1>Top 3 Herois</h1>

				<HeroInfo hero="Superman" img="img/superman.jpg" />
				<HeroInfo hero="Batman" img="img/batman.jpg" />
				<HeroInfo hero="Wonder Woman" img="img/wonderwoman.jpg" />

				{
					this.state.list_of_heroes.map((heroi, pos) => {
						if (this.state.favorite_heroes.includes(pos)) {
							return (<HeroInfo hero={heroi.name} img={heroi.image} />)
						}
					}
					)
				}

				<br />

				<button onClick={() => this.button()}>Mudar Favotiros</button>

				<br />
				<img src="img/diagrama.png" className="Diagrama" />
			</div>
		);
	}

	button = () => {
		var nums = [];

		nums.push(Math.floor(Math.random() * heroesList.length) + 1);

		while (nums.length < 3) {
			var random = Math.floor(Math.random() * heroesList.length) + 1;

			if (!nums.includes(random)) {
				nums.push(random);
			}
		}

		this.setState({
			favorite_heroes: [nums[0],nums[1] ,nums[2]]
		})
	}
}

export default Content;