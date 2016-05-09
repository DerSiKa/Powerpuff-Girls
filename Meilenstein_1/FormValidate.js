
var regexNames = /^[a-zA-Z]+$/;
var regexRuecken = ([4-15]);
var regexGeb = ([1900-2015]);

//http://www.html5rocks.com/de/tutorials/file/xhr2/

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
    
    if (regexNames.test(nachname) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
    if (regexNames.test(verein) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
    if (regexNames.test(headcoach) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
    if (regexNames.test(asscoach) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    
    if (regexRuecken.test(rnr) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
    if (regexGeb.test(geb) === false) {
        alert("Einige Angaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.");
        return false;
    }
    
 
 
 
 
 
 	function sendForm(form) {
  	var formData = new FormData(form);
  	var xhr = new XMLHttpRequest();
  	xhr.open('POST', form.action, true);
  	xhr.onload = function(e) { ... };
  	xhr.send(formData);
  	return false;
	}



	function toggle(){
	//bei klick nur favoriten zeigen
	}
}
