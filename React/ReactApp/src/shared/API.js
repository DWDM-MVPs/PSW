﻿var BASE_URL = "https://us-central1-league-of-heroes-backoffice.cloudfunctions.net/api";
var PUBLIC_ID = null; // Número de aluno.
var PRIVATE_ID = ""; // Código privado.





// [GET] Devolve a lista de utilizadores.
export function getUsers() {
	fetch(BASE_URL + "/users/");
	return fetch(BASE_URL + "/users/");
}

// [GET] Devolve a lista de super-heróis de um utilizador em especifico.
export function getHeroesByUserId() {
	return fetch(BASE_URL + "/users/" + PUBLIC_ID);
}

// [GET] Devolve o top-3 da lista de super-heróis de um utilizador.
export function getTopHeroesByUserId() {
	return fetch(BASE_URL + "/users/" + PUBLIC_ID + "/top");
}

// [POST] Grava a lista de super-heróis de um determinado utilizador.
export function setHeroesByUserId(listaHerois) {
	fetch(BASE_URL + "/users/" + PRIVATE_ID, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			list_of_heroes: listaHerois,
		}),
	});
}

// [POST] Grava o top da lista de super-heróis de um determinado utilizador.
export function setTopHeroesByUserId(favoritos) {
	fetch(BASE_URL + "/users/" + PRIVATE_ID + "/top", {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			favorite_heroes: favoritos,
		}),
	});
}



// Popular
export function popular() {
	popularTop3();
	popularSuperHerois();
}

// F5 A10
export function popularTop3() {
	setTopHeroesByUserId(getTopHeroesByUserId());
}

// F5 A11
export function popularSuperHerois() {
	setHeroesByUserId(getHeroesByUserId());
}