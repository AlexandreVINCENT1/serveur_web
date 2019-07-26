//importation des librairies
const express = require('express');

//initialisation du serveur
var server = express();

//configuration routes
server.get('/', function(req, res) {
    res.render('quote.ejs');
});

//accès aux fichiers des dossiers js et css
server.use(express.static('js'), express.static('css'));

//démarre le serveur et affiche un message côté serveur. le serveur écoute sur le port 8080
server.listen(8080, function() {
    console.log('Server is launched on port 8080');
});