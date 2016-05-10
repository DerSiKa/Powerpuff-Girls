
var regexNames = /^[a-zäöü]+$/i;
var regexRuecken = ([4-15]);
var regexGeb = ([1900-2015]);


var vorname = document.getElementsByName('vorname')[0].value;
var nachname = document.getElementsByName('nachname')[0].value;
var verein = document.getElementsByName('verein')[0].value;
var headcoach = document.getElementsByName('hcoach')[0].value;
var asscoach = document.getElementsByName('asscoach')[0].value;
var rnr = parseInt(document.getElementsByName('rnr')[0].value);
var geb = parseInt(document.getElementsByName('geb')[0].value);



function validateForm() {
    
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
    
    else if (regexRuecken.test(rnr) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
    else if (regexGeb.test(geb) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    return true;
    }
 
 
 
 
 
 	function sendForm(form) {
 		if (validateForm()){
 			var formData = new FormData(form);
 			var xhr = new XMLHttpRequest();
 			xhr.open('POST', 'http://139.59.134.26/', true);
 			xhr.onload = function(e) { ... };
 			xhr.send(formData);
 		}
 	}
 	
 	Window.onLoad = function () {
 	        drawTable('http://139.59.134.26/api/players'); 
 	}

 	function drawTable(link) { 
  // Vorherige Daten  aus Tabelle löschen 
 		   //$(".data").remove();  TODO raus
 	 
 		 
 		  var xhr2= new XMLHttpRequest();
 	 		xhr2.open('GET', link, true);
 	 		xhr2.send();
 	 		xhr2.onreadystate = function() {
 	 			if (xhr2.readyState == 4) {
 	 				if (xhr2.status == 200) {
 	 					var data = JSON.parse(xhr2.response); 
 	 					for (var i = 0; i < data.length; i++) { 
 	 		                drawRow(data[i]); 
 	 		             } 
 	 				} else {
 	 					alert('Es konnte keine Verbindung hergestellt werden!');
 	 				}
 	 			}
 	 		}
 		 } 
 		 
 		 
 	function drawRow(rowData) { 
 		   var row = $("<tr class='data' />"); //TODO Siehe oben remove();
 	       $("#tabelle").append(row); 
 		
 		 
 		  row.append($("<td>" + rowData.vorname + " " + rowData.name + "</td>")); 
 		  row.append($("<td>" + rowData.club + "</td>")); 
 		  row.append($("<td>" + rowData.coach + "</td>")); 
 		  row.append($("<td>" + rowData.position + "</td>")); 
 		  row.append($("<td>" + rowData.number + "</td>")); 
 		  row.append($("<td>" + rowData.year + "</td>")); 
 	 } 


// TODO	function toggle(name)
//    {
//    if (favorites) {
//   
//    	GET/api/players?favorites=true
//    		
//       document.getElementById("loginTable").style.display="table";
//       document.getElementById("loginLink").onclick = toggleTable(false);
//
//    } else {
//    	GET /api/players
//       document.getElementById("loginTable").style.display="none";
//       document.getElementById("loginLink").onclick = toggleTable(true);
//    }
//   }


