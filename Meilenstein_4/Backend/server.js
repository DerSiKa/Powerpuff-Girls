const express = require('express');
const server = express();
const cors = require('express-cors');


var players = require('./allPlayers.json');

server.use(cors({
    allowedOrigins: ['*'] //all Origins are allowed
}));


function checkFavorit(player){
    return players.favorite === 'true';
}

server.get('/api/players', (req, res) => {
    var queryFavorites = req.query.favorites || 'false';
    var querySearch = req.query.search || 'false';

    var response;

    if(queryFavorites === 'true') {
        response = players.filter(checkFavorit); //TODO filter-Methode richtig implementieren
    } else {
        response = players;
    }

    if(querySearch !== 'false') {
        response = response.filter(); //TODO filter richtig anwenden //char?
    }

    res.status(200).json(response);
});


server.delete('/api/players', (req, res)=> {
    players.splice(req.param.id);
});



server.post('/api/players', (req,res) => {

    if(req.body){
        res.status(200).json({ message: 'Spieler wurde erfolgreich gespeichert' });
    } else{
        res.status(404).json({ message: 'Empty body is not allowed.' });
    }
});


server.put('/api/players/:id', (req,res) => {
    res.status(200).json({message: 'Spieler mit der ID '+ req.params.id + ' wurde erfolgreich geupdatet'});
});

server.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


var io = require ('socket.io')(server);

io.sockets.on('connection', socket =>{
    socket.emit('chat', {zeit: new Date(), text: 'Du bist nun mit dem Server verbunden.'});
    socket.on('chat', data => {
        io.sockets.emit('chat', {zeit: new Date(), name: data.name || 'Anaonym', text: data.text});
    });
});


