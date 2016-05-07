
var regexNames = ([A-Za-zäÄöÖüÜß]);
var regexRuecken = ([4-15]);
var regexGeb = ([1900-2015]);



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
    
 
}
