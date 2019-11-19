var BASE_URL = "https://us-central1-league-of-heroes-backoffice.cloudfunctions.net/api";
var PUBLIC_ID = null; // Número de aluno.
var PRIVATE_ID = ""; // Código privado.





// [GET] Devolve a lista de utilizadores.
export function getUsers() {
	fetch(BASE_URL + "/users/");
}

// [GET] Devolve a lista de super-heróis de um utilizador em especifico.
export function getHeroesByUserId() {
	fetch(BASE_URL + "/users/" + PUBLIC_ID);
}

// [GET] Devolve o top-3 da lista de super-heróis de um utilizador.
export function getTopHeroesByUserId() {
	fetch(BASE_URL + "/users/" + PUBLIC_ID + "/top");
}

// [POST] Grava a lista de super-heróis de um determinado utilizador.
export function setHeroesByUserId() {
	fetch(BASE_URL + "/users/" + PRIVATE_ID, {
		method: 'POST',
	});
}

// [POST] Grava o top da lista de super-heróis de um determinado utilizador.
export function setTopHeroesByUserId() {
	fetch(BASE_URL + "/users/" + PRIVATE_ID + "/top", {
		method: 'POST',
	});
}