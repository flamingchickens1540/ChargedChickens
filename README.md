# Charged Chickens

Team 1540's scouting system for FRC 2023, Charged Up!



## Frontend

## API

The API is split into four different base routes, admin, authed, scout, and submit.

### Scout
This is very simple, it just exists to poll the next robot from the scouting queue.

This request is made by a client every second or so while they're logged in. As soon as a match is released by the admin, the client will receive a valid response.

### Authed
This endpoint is also very simple. A request to it is made by the client if the entered passphrase matches the correct passphrase. The client needs to check the passphrase, since it's a svelte store, which only the it had access to.

### Submit
This route contains two endpoints, match, pit, and photo. Each one of for a different type of submission. These endpoints are requested when the client wants to submit scouting data.

## Server

### Setup
We use a MySQL databse hosted on team 1540's server.

To set up a database, check out [this MySQL tutorial](https://dev.mysql.com/doc/mysql-getting-started/en/)

Once you have that set up, create a .env file using the .env.example file as a template. Make sure your database credientials match.

### Authentication
Charged Chickens is a realively secure scouting system. At every endpoint, the API validates the clients request, by ensuring that the request header password matches the expected password.

For administrators creating matches and events, the admin_password is needed, for the scouts, the passphrase is needed. Both the passphrase and admin_password. We recommend changing the admin_pasword and the passphrase every competition day.

There's also an appkey, this is used to ensure that the requset is coming from a valid client, since the user never inputs(or knows) the appkey, it only exists in generalStores.ts Every client should have the same appkey. Appkey validation exists to make sure peoeple (from outside the team) who overhear the passphase can't make requests to the API without having access to Charged Chickens.