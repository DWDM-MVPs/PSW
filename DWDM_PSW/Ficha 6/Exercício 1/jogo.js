// # ============================================ LOAD
var ps;
var p;
var nivel = 0;



function f_loadPergunta() {
	nivel++;

	if (nivel == 6) fimJogo();
	else {
		p = ps[nivel - 1];

		document.getElementById("resultado").style.visibility = 'hidden';

		document.getElementById("pergunta").textContent = p[0];
		for (var i = 1; i <= 4; i++) {
			document.getElementById("resposta" + i).style.backgroundColor = 'lightgray';
			document.getElementById("resposta" + i).textContent = p[i];
		}
	}
}


window.onload = function () {
	var p1 = ["Que nome se dá aos dados armazenados no cliente pelas páginas WEB?", "Requests", "Cookies", "Dados", "Vírus", "2"];
	var p2 = ["Para selecionar um ID no CSS usa-se?", "#id", ".id", "id", "$id", "1"];
	var p3 = ["Que tag é usada para declarar código JS?", "<js>", "<java>", "<javascript>", "<script>", "4"];
	var p4 = ["Qual é a tag usada para mudar o título da página?", "<title>", "<t>", "<pagetitle>", "<header>", "1"];
	var p5 = ["Como se definem comentários em JS?", "$", "#", "\/\/", "--", "3"];

	ps = [p1, p2, p3, p4, p5];

	f_loadPergunta();
}


function fimJogo() {
	if (confirm('Fim do jogo!\n\nPontuação: ' + pontos + '\n\n\nDeseja jogar novamente?')) location.reload();
}
// # ============================================ END LOAD





// # ============================================ MAIN
var pontos = 0;
var input = true;

function f_click(num) {
	if (input == true) {
		input = false;
		if (num == p[5]) {
			document.getElementById("resultado").style.visibility = 'visible';
			pontos += 5;
		}
		else {
			for (var i = 1; i <= 4; i++) p[5] != i ? document.getElementById("resposta" + i).style.backgroundColor = 'red' : document.getElementById("resposta" + i).style.backgroundColor = 'green';
			pontos > 2 ? pontos -= 2 : pontos = 0;
		}
		document.getElementById("pontuacao").textContent = 'Pontuação: ' + pontos;
		botao.style.visibility = 'visible';
	}
}
// # ============================================ END MAIN





// # ============================================ NEXT
var botao = document.getElementById("proximo");

document.getElementById("proximo").onclick = function () {
	botao.style.visibility = 'hidden';
	input = true;
	f_loadPergunta();
}
// # ============================================ END NEXT