var txt_nome = document.getElementById("txt_nome")
var txt_data = document.getElementById("txt_data");
var txt_email = document.getElementById("txt_email");
var txt_password = document.getElementById("txt_password");

function validateForm() {
	if (txt_nome.value == "") alert("O campo \"Nome\" não pode estar vazio.");
	else if (new Date(txt_data.value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0) || txt_data.value == "") alert("O campo 'Data de Nascimento' tem de ter uma data no passado.");
	else if (txt_email.value.split("@").length != 2 || !txt_email.value.endsWith(".com") || txt_email.length <= 7) alert("O e-mail inserido no campo 'E-mail' não é válido.");
	else if (txt_password.value.length < 8) alert("A 'Password' tem de ter no mínimo 8 caracteres.");
	else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) document.getElementById("mensagemServidor").innerHTML = xmlhttp.responseText;
		}
		xmlhttp.open('GET', 'registerUser.html?success=true', true);
		xmlhttp.send();
	}
}