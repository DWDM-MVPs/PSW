import React from 'react';
class Dashboard extends React.Component{
	constructor(props) {
		super(props);
	}
	verfav=(id)=>{
		for (let index = 0; index < this.props.favorite_heroes.length; index++) {
			if (id === this.props.favorite_heroes[index]) {
				return (<button className="acao" type="button" onClick={()=>this.props.removefav(id)}>Remover Favorito</button>);
			}
		}
		if (this.props.favorite_heroes.length < 3) {
			return (<button className="acao" type="button" onClick={()=>this.props.addfav(id)}>Adicionar Favorito</button>);
		}
	}
	render() {
		return (
			<div className="dashboard">
				<h1>Dashboard</h1>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Nome</th>
							<th scope="col">Super-Poder</th>
							<th scope="col">Imagem</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.list_of_heroes.map((heroes, index) =>
								<tr key={index}>
									<th>{heroes.id}</th>
									<td>{heroes.name}</td>
									<td>{(heroes.super_power !== '') ? (heroes.super_power) : ("N/D")}</td>
									<td><img className="tableimg" src={heroes.image} alt="img"></img></td>
									<td>
										<button className="acao" type="button" onClick={()=> this.props.verliherois(heroes.id)}>Eliminar</button>
										{
											this.verfav(heroes.id)
										}
										<button className="acao" type="button">Editar</button>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Dashboard;