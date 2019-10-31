var numerico = document.getElementById("numeric");
var botao = document.getElementById("button");



var numero = Math.floor(Math.random() * 10 + 1);
var opcoes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



numerico.onkeyup = function () {

	if (opcoes[numerico.value] != undefined) botao.disabled = false;
	else botao.disabled = true;
}

botao.onclick = function () {
	var guess = document.getElementById("numeric").value;

	numerico.value = '';

	if (guess == numero) {
		numerico.disabled = botao.disabled = true;
		alert("Acertou!");
	}
	else if (guess > numero) alert("Tenta um número mais baixo.");
	else alert("Tenta um número mais alto.")
}