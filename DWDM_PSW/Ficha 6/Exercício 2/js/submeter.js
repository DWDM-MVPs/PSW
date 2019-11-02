var txt_nome = document.getElementById("txt_nome")
var txt_data = document.getElementById("txt_data");
var txt_email = document.getElementById("txt_email");
var txt_password = document.getElementById("txt_password");

function validateForm() {
	if (txt_nome.value != "" && txt_data.value != "" && txt_email.value != "" && txt_password.value != "") {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById("mensagemServidor").innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open('GET', '/registerUser.html?success=true', true);
		xmlhttp.send();
	}
	else alert("Tem de preencher todos os campos.");
}