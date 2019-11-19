import React from 'react';
import { NavLink } from 'react-router-dom';
import { popular, setHeroesByUserId, setTopHeroesByUserId } from '../shared/API';
import Formulario from './Formulario';

class Dashboard extends React.Component {
	render() {
		return (
			<div className="Dashboard">
				<button onClick={popular}>Popular</button>
				<NavLink exact to="/dashboard/add">Adicionar</NavLink>
				<table className="Tabela">
					<tr>
						<th>ID</th>
						<th>Imagem</th>
						<th>Nome</th>
						<th>Superpoder</th>
						<th>Ações</th>
					</tr>
					{
						Object.keys(this.props.list_of_heroes).map((hero, i) =>
							<tr>
								<th>{hero.id}</th>
								<td><img className="ImagemHeroi" src={hero.image} alt="Imagem não encontrada" /></td>
								<td>{hero.name}</td>
								<td>{(hero.super_power === '') ? "N/D" : hero.super_power}</td>
								<td>
									<button onClick={() => this.eliminarHeroi(hero.id)}>Eliminar</button>
									{this.isFavorito(hero.id)}
									<button onClick={() => (<Formulario list_of_heroes={this.props.list_of_heroes} />)}>Editar</button>
								</td>
							</tr>
						)
					}
				</table>
			</div>
		);
	}

	eliminarHeroi = (id) => {
		var list_of_heroes = this.props.list_of_heroes;
		var favorite_heroes = this.props.favorite_heroes;

		for (var i = 0; i < this.props.list_of_heroes.length; i++) {
			if (id === this.props.list_of_heroes[i].id) {
				list_of_heroes.splice(i, 1);
			}

			if (id === this.props.favorite_heroes[i]) {
				favorite_heroes.splice(i, 1);
			}
		}

		this.setState({
			list_of_heroes: list_of_heroes,
			favorite_heroes: favorite_heroes,
		});

		setHeroesByUserId(this.state.list_of_heroes);
	}

	isFavorito = (id) => {
		for (var i = 0; i < this.props.favorite_heroes.length; i++) {
			if (id === this.props.favorite_heroes[i]) {
				return (<button onClick={() => this.removerFavorito(id)}>Remover Favorito</button>);
			}
		}

		if (this.props.favorite_heroes.length < 3) {
			return (<button onClick={() => this.adicionarFavorito(id)}>Adicionar Favorito</button>);
		}
	}

	adicionarFavorito = (id) => {
		var favorite_heroes = this.props.favorite_heroes;

		favorite_heroes.push(id);

		this.setState({
			favorite_heroes: favorite_heroes,
		});

		setTopHeroesByUserId(this.state.favorite_heroes);
	}

	removerFavorito = (id) => {
		var favorite_heroes = this.props.favorite_heroes;

		for (var i = 0; i < this.props.favorite_heroes.length; i++) {
			if (id === this.props.favorite_heroes[i]) {
				favorite_heroes.splice(i, 1);
			}
		}

		this.setState({
			favorite_heroes: favorite_heroes,
		});

		setTopHeroesByUserId(this.state.favorite_heroes);
	}
}

export default Dashboard;