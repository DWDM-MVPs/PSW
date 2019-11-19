import React from 'react';

class Formulario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Super_heroi: {
				id: null,
				nome: "",
				imagem: "",
				superPoder: "",
			},
			list_of_heroes: null,
		}
	}



	render() {
		return (
			<div>
				<form onSubmit={(e) => this.submitEvent(e, this.state.Super_heroi)}>
					<p>
						<label>Nome: </label>
						<input type="text" id="name" name="name" placeholder="Nome" onChange={(e) => this.updateEvent(e, "name")} />
					</p>
					<p>
						<label>Imagem: </label>
						<input type="text" id="imagem" name="imagem" placeholder="Imagem" onChange={(e) => this.updateEvent(e, "imagem")} />
					</p>
					<p>
						<label>Super poder: </label>
						<input type="text" id="super_poder" name="super_poder" placeholder="Super poder" onChange={(e) => this.updateEvent(e, "super_power")} />
					</p>
					<button type="submit">Guardar</button>
				</form>
			</div>
		);
	}




	submitEvent = (e, novoHeroi) => {
		e.preventDefault();

		var herois = this.props.list_of_heroes;
		herois.push(
			{
				id: herois[herois.length - 1].id + 1,
				name: novoHeroi.name,
				super_poder: novoHeroi.super_poder,
				image: novoHeroi.image,
			});

		this.setState(
			{
				list_of_heroes: herois,
			});
	}

	updateEvent = (e, campo) => {
		e.preventDefault();

		var novoHeroi = this.state.Super_heroi;
		novoHeroi[campo] = e.target.value;

		this.setState({
			Super_heroi: novoHeroi,
		});
	}
}

export default Formulario;