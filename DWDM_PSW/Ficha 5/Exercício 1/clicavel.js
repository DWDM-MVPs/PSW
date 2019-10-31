var x = false;

function funcao() {
	alert((x = !x) == true ? "Verdadeiro" : "Falso");
}