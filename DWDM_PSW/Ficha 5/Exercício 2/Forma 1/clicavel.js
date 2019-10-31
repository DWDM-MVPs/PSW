var dia = 0;

function trueFalse() {
	var texto;

	if (dia > 6) dia = 0;

	if (dia == 0) texto = "Domingo";
	else if (dia == 1) texto = "Segunda";
	else if (dia == 2) texto = "Terça";
	else if (dia == 3) texto = "Quarta";
	else if (dia == 4) texto = "Quinta";
	else if (dia == 5) texto = "Sexta";
	else if (dia == 6) texto = "Sábado";

	dia++;

	alert(texto);
}