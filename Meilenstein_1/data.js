function validateForm() {

	var regexNames = /^[a-zöüä]+$/i;

	var vorname = document.getElementsByName('vorname')[0].value;
	var nachname = document.getElementsByName('nachname')[0].value;
	var verein = document.getElementsByName('verein')[0].value;
	var headcoach = document.getElementsByName('headcoach')[0].value;
	var asscoach = document.getElementsByName('asscoach')[0].value;
	var rnr = parseInt(document.getElementsByName('rnr')[0].value);
	var geb = parseInt(document.getElementsByName('geb')[0].value);

	if (regexNames.test(vorname) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(nachname) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(verein) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(headcoach) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (regexNames.test(asscoach) === false) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (rnr < 4 || rnr > 15) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}

	else if (geb < 1900 || geb > 2016) {
		alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
		return false;
	}
	return true;
}

function sendForm(form) {
	var checked = validateForm(form);
	if (checked) {
		var formData = new FormData(form);
		var xhr = new XMLHttpRequest();
		xhr.open("POST","http://139.59.134.26/api/players", true);
		xhr.send(formData);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if (xhr.status == 200) {
					alert('Daten wurden erfolgreich übermittelt.');
				}
				else {
					alert('Daten wurden nicht übermittelt.');
				}
			}
		}
	}
}

function getPlayers(favorites) {
	var xhr = new XMLHttpRequest();
	var favCheck = "";
	if (favorites) {
		favCheck = "?favorites=true";
	}
	xhr.open("GET", "http://139.59.134.26/api/players"+favCheck, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if (xhr.status == 200) {
				var data = JSON.parse(xhr.response);
				setTable(data);
			}
			else {
				alert('Server antwortet nicht.');
			}
		}
	}
	
}

function setTable(dataArray) {
	var table = document.getElementById("tabelle");
	var list = dataArray;
	if (table.rows.length > 0) {
		deleteTable(table);
	}
	list.forEach(function(data) {
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