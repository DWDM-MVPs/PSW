var dia = 0;

function trueFalse() {
	if (dia > 6) dia = 0;

	if (dia == 0) alert("Domingo");
	else if (dia == 1) alert("Segunda");
	else if (dia == 2) alert("Terça");
	else if (dia == 3) alert("Quarta");
	else if (dia == 4) alert("Quinta");
	else if (dia == 5) alert("Sexta");
	else if (dia == 6) alert("Sábado");

	dia++;
}