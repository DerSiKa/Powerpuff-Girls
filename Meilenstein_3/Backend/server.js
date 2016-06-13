const express = require('express');
const server = express();
const cors = require('express-cors');


var players = require('./allPlayers.json');

server.use(cors({
    allowedOrigins: ['*'] //all Origins are allowed
}));

server.get('/api/players', (req, res) => {
    var queryFavorites = req.query.favorites || 'false';
    var querySearch = req.query.search || 'false';

    var response;

    if(queryFavorites === 'true') {
        response = players.filter((element) => element.favorit === true);
    } else {
        response = players;
    }

    if(querySearch !== 'false') {

        response = response.filter((element) => element.name.charAt(0) === querySearch.toUpperCase());
    }

    res.status(200).json(response);
});


server.delete('/api/players', (req, res)=> {
    for(let i = 0; i < players.length; i++) {
        if(players[i].id == req.param.id) {
            players.splice(i, 1);
            i = players.length;
        }
    }
    res.status(200).json({});
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
    console.log('Server listening on port 3000 (localhost)!');
});