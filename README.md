# node-api-server
An example of a simple Node API server with a React front end. And Pokemon.

## Slides from the API presentation

[ProvoJS, July 2015: APIs](https://slides.com/andrewjensen/provojs-apis/).

## Running the server

Clone the repository, then run these commands in the project folder:
```
npm install
npm start
```

Now you can access the Web app ([http://localhost:3000](http://localhost:3000)) and the API ([http://localhost:4000](http://localhost:4000)).

## Current API endpoints

- `GET /api/trainers` (Get all the trainers in the database)
- `GET /api/pokemon` (Get all the pokemon in the database)

You can test out these endpoints in your web browser by navigating to [http://localhost:4000/api/trainers](http://localhost:4000/api/trainers) and [http://localhost:4000/api/pokemon](http://localhost:4000/api/pokemon). You can also format the JSON data that is returned with a Chrome extension - see below.

## Completing the project

The front end is already finished, but there are a few API endpoints that need to be implemented for the project to work.
You need to implement the following endpoints:

- `GET /api/trainers:id` (get a specific trainer)
- `GET /api/trainers:id/pokemon` (get the pokemon for a specific trainer)
- `GET /api/pokemon/:id` (get a specific pokemon)
- `POST /api/trainers` (add a trainer)
- `POST /api/pokemon` (add a pokemon)

See `api-server.js` for more help on how to create these endpoints.

## Resources

- [JSON Formatter Chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
