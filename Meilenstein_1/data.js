function validateForm() {

	var regexNames = /^[a-zäöü]+$/i;
	var regexRuecken = ([4-15]);
	var regexGeb = ([1-2015]);


	var vorname = document.getElementsByName('vorname')[0].value;
	var nachname = document.getElementsByName('nachname')[0].value;
	var verein = document.getElementsByName('verein')[0].value;
	var headcoach = document.getElementsByName('hcoach')[0].value;
	var asscoach = document.getElementsByName('asscoach')[0].value;
	var rnr = parseInt(document.getElementsByName('rnr')[0].value);
	var geb = parseInt(document.getElementsByName('geb')[0].value);

	if (regexNames.test(vorname.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(nachname.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(verein.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(headcoach.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(asscoach.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexRuecken.test(rnr.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexGeb.test(geb.value) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}
	return true;
}

function sendForm(form) {
	var checked = validateForm(form);
	if (checked) {
		var form = document.forms.namedItem("createPlayer");
		var formData = new FormData(form);
		var xhr = new XMLHttpRequest();
		xhr.open("POST","http://139.59.134.26/api/players", true);
		xhr.onload = function(e) {
			if (xhr.status == 200) {
				alert("OK");
				form.reset();
			} else {
				alert("Error: " + xhr.status);
			}
		};
		xhr.send(formData);
		console.log(formData);
	}
}

function getPlayers(favorites) {
	var xhr = new XMLHttpRequest();
	var favCheck = "";
	if (favorites) {
		favCheck = "?favorites=true";
	}
	xhr.open("GET", "http://139.59.134.26/api/players"+favCheck, true);
	xhr.setRequestHeader("Content-type","application/json");
	xhr.onload = function(e) {
		var data = JSON.parse(this.response);
		setTable(data);
	}
	xhr.send();
}

function setTable(dataArray) {
	var table = document.getElementById("tabelle");
	var array = dataArray;
	if (table.rows.length > 0) {
		deleteTable(table);
	}
	array.forEach(function(data) {
		var row = table.insertRow();
		row.insertCell(0).innerHTML = data.name;
		row.insertCell(1).innerHTML = data.club;
		row.insertCell(2).innerHTML = data.coach;
		row.insertCell(3).innerHTML = data.position;
		row.insertCell(4).innerHTML = data.number;
		row.insertCell(5).innerHTML = data.year;
	});
}

function deleteTable(table) {
	var amountRows = table.rows.length;
	for (var i=amountRows-1; i > 0; i--) {
		table.deleteRow(i);
	}
}

function toggleAll(){
	document.getElementById('tableAll');
}

function toggleFavorites(){
	document.getElementById('tableFavorites');
}