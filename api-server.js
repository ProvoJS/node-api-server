/**
 * Load dependencies
 */
var express = require('express');
var db = require('./database.js');
var app = express();
var port = 4000;

/**
 * Send the HTML for the front end.
 */
app.get('/', function (request, response) {
    response.send('Welcome to the API server!');
});

/****************************
 * Trainer-related API calls
 ****************************/

app.get('/api/trainers', function(request, response) {
    response.json(db.getAllTrainers());
});

/**
 * TODO: create an endpoint that gets a single trainer by their ID.
 * It needs to receive a GET request at '/api/trainers/:id'
 * and call the `db.getTrainerById` function.
 */

/**
 * TODO: create an endpoint that adds a trainer to the database.
 * It needs to receive a POST request at '/api/trainers'
 * and call the `db.addTrainer` function.
 */

/****************************
 * Pokemon-related API calls
 ****************************/

app.get('/api/pokemon', function(request, response) {
    response.json(db.getAllPokemon());
});

app.get('/api/pokemon/:id', function(request, response) {
    var pokemonId = request.params.id;
    response.json(db.getPokemonById(pokemonId));
});

/**
 * TODO: create an endpoint that gets all the pokemon for a trainer.
 * It needs to receive a GET request at '/api/trainers/:id/pokemon'
 * and call the `db.getPokemonByTrainerId` function.
 */

 /**
  * TODO: create an endpoint that adds a pokemon to the database.
  * It needs to receive a POST request at '/api/pokemon'
  * and call the `db.addPokemon` function.
  */



/**
 * Start the server.
 */
var server = app.listen(port, function() {
    console.log('API Server listening on port %s', port);
});
