# Spotify App

The project consists of two parts:

* Server: spotify-api-auth for authentication against the Spotify web API.
* Client: spotify-app to allow the user to search by artist, album or songs from the Spotify catalogue.

## Installation

This project runs on Node.js.

Once installed, clone the repository and install its dependencies running:

    $ npm install

## Running the project

* Spotify-api-auth: In order to run the server project, open the folder and run its `app.js` file. For instance:

    $ cd authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser.

* Spotify-app: In order to run the server project:

    $ ng serve

Once logged in from the server application, the page redirects to the Angular project: `http://localhost:4200`