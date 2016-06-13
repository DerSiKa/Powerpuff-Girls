$(document).ready(() =>{
    // WebSocket
    const socket = io.connect();
    var verbunden = false;
    // neue Nachricht
    socket.on('chat', (data) => {
        var zeit = new Date(data.zeit);
        $('#content').append(
            $('<li></li>').append(
                // Uhrzeit
                $('<span>').text('[' +
                    (zeit.getHours() < 10 ? '0' + zeit.getHours() : zeit.getHours())
                    + ':' +
                    (zeit.getMinutes() < 10 ? '0' + zeit.getMinutes() : zeit.getMinutes())
                    + '] '
                ),
                // Name
                $('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
                // Text
                $('<span>').text(data.text))
        );
        // nach unten scrollen
        $('body').scrollTop($('body')[0].scrollHeight);
    });
    // Nachricht senden
    function senden(){
        // Eingabefelder auslesen
        var text = $('#text').val();
        if(verbunden) {
            socket.emit('chat', text);
        } else {
            socket.emit('login', text);
            verbunden = true;
        }

        // Text-Eingabe leeren
        $('#text').val('');
    }
    // bei einem Klick
    $('#senden').click(senden);
    // oder mit der Enter-Taste
    $('#text').keypress(function (e) {
        if (e.which == 13) {
            senden();
        }
    });
});
