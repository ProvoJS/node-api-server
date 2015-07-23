// Set up the server, using the express module.
var express = require('express');
var app = express();

// Define an API endpoint:  GET /info
app.get('/info', function (request, response) {
    //This function gets run every time a user visits the '/info' page.

    //Send this data back to the user.
    response.json({
        meetup: 'ProvoJS',
        awesomeness: '100%'
    });
});

// Start listening for incoming connections on port 4000.
var server = app.listen(4000, function() {
    console.log('API Server listening at http://localhost:4000/');
});
