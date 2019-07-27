/*fichier gérant le serveur web :
initialisation du serveur, définition des routes, et lancement du serveur.*/

//importation des modules.
const express = require('express');

//initialisation du serveur.
var server = express();

//configuration des routes.
server.get('/', function(req, res) {
    res.render('quote.ejs');
});

//donne accès aux fichiers des dossiers js et css.
server.use(express.static('js'), express.static('css'));

//démarre le serveur sur le port 8080 et affiche un message côté serveur.
server.listen(8080, function() {
    console.log('Server is launched on port 8080');
});
