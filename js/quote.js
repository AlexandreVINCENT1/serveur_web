/*fichier permettant la récupération des données de l'api
et leur traitement ainsi que leur affichage sur le site. */

/*initialisation d'une variable permettant une modification du contenue html.
Ici slection de la div "quote" présente dans quote.ejs*/
var div = document.getElementById("quote");

//Crée une nouvelle balise <p> et l'ajoute dans la div de la page
function create_text(text, number, div) {
    var new_element = document.createElement("P");
    var displayed_text = document.createTextNode(text);
    new_element.id = "p" + number;
    new_element.appendChild(displayed_text);
    div.appendChild(new_element);

}

/*permet l'automatisaiton de la création de balise texte
et définie une image de fond dans la div. */
function display_data(data) {
    var array = new Array(7);

    array[0] = data.quotes[0].title;
    array[1] = data.quotes[0].quote;
    array[2] = data.quotes[0].author;
    array[3] = data.quotes[0].date;
    array[4] = data.copyright;
    array[5] = data.quotes[0].background;

    div.style.backgroundImage = "url("+ array[5] +")";
    for(let a = 0; a < 5; a++)
        create_text(array[a], a, div);
}

/*la fonction recupére des données de l'api avec axios et
envoie de celles-ci pour traitement et intégration
dans la page web. */
async function get_data_api() {
    await axios.get('http://quotes.rest/qod.json')
    .then(res => {
        var data = res.data.contents;
        display_data(data);
    })
    .catch((err) => {
        console.log(err.response);
    });
}

get_data_api();
