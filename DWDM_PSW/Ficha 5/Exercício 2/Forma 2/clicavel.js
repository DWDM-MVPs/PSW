var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var index = 0;

function funcao() {
	if (index > 6) index = 0;

	alert(dias[index]);

	index++;
}