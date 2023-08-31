# Charged Chickens

Team 1540's scouting system for FRC 2023, Charged Up!

Todo:
- [ ] Write about the database architecture

## API

The API is split into four different bases `/routes`, `/admin`, `/authed`, `/scout`, and `/submit`. All endpoints shown below are within the `/api/` route. All endpoint methods are `POST`.

### How to use the API

#### Match Scouting
1. The admin signs in, and their signed-in status is verified by the admin/authed endpoint. 
2. The admin makes a request to the `admin/make-event` endpoint to create an empty event.
3. All the teams need to be loaded into the database, we wrote a Python script to grab them all from TBA (write-up coming later).
4. The following steps can happen asynchronously and must happen for every match in an event.
5. The admin enters a MatchKey and then enters the teams for that match either by doing it manually or using autofill by querying the admin/teams endpoint. The admin then releases a match with the admin/assign endpoint.
6. The scouts authenticate with the passphrase, they are verified with the authed endpoint.
7. The scouts then log in and repeatedly query the scout endpoint with a (4-second interval in between queries) until they have been assigned a team to scout.
8. Once the match is scouted, the scouts submit their results with the submit/match endpoint.

### [/scout](/src/routes/api/scout/+server.ts)
Polls the next robot from the scouting queue, if the scouting queue is empty, it returns the time until the client should make the request again. It takes an `AbortController` signal as a request param.

This request is made by a client every second or so while they're logged in. As soon as a match is released by the admin, the client will receive a valid response.

### [/authed](/src/routes/api/authed/+server.ts)
Checks if the passphrase in the header matches the correct passphrase.

### Submit
This route contains two endpoints, `/match`, `/pit`, and `/photo`. Each one of for a different type of submission. These endpoints are requested when the client wants to submit scouting data.

#### [/submit/match](/src/routes/api/submit/match/+server.ts) 
This endpoint takes in all the data from a match, including the cycle and defense times, and puts them in the database. [Request made from here](/src/lib/components/match-scout-components/Submit.svelte)

#### [/submit/pit](/src/routes/api/submit/pit/+server.ts)
This endpoint takes in the event and team keys as well as the pit-scouting data and inserts it into the database. [Request made from here](/src/lib/components/pit-scout-components/Submit.svelte)

#### [/submit/photo](/src/routes/api/submit/photo/+server.ts)
This endpoint takes an array or object of photos and a team and event key. First, the team and event keys are validated by checking if they both match their expected format (see the validateInput function at this endpoint's route). Then each photo is validated by making sure they are all less than one gigabyte in size. Finally, all the photos are inserted into the database. [Request made from here](/src/routes/photo/+page.svelte)

### Admin
This route contains several endpoints, assign, authed, make-event, and teams. Each one is used for a different purpose by the admin, and should only be accessible by the admin. Each of these endpoints requires a valid admin password header to succeed. [All requests made from here](/src/routes/admin-dashboard/+page.svelte)

#### [/admin/assign](/src/routes/api/admin/assign)
This endpoint is used to assign a match to queued scouts and to insert a match (not a `TeamMatch`) into the database. It takes a request containing the data known about the match before it's played. This includes which robots are playing on what alliance, the match key, and the event key. [See the AssignData Type](/src/lib/types.ts).

#### [/admin/authed](/src/routes/api/admin/authed/+server.ts)
This endpoint checks if the admin has the right `admin_password`, by checking the header.

#### [/admin/teams](/src/routes/api/admin/teams/+server.ts)
This endpoint takes in a match key as the request, then queries The Blue Alliance to find which teams are on each alliance, and then returns the two lists of team_keys. This data is used by the admin dashboard to autofill teams after a match is entered. This is used to reduce the admin's workload.

#### [/admin/make-event](/src/routes/api/admin/make-event)
This endpoint inserts an empty event into the database. The request body should contain an [`EventKey`](/src/lib/types.ts).

## Server

### Setup
We use a MySQL database hosted on team 1540's server.

To set up a database, check out [this MySQL tutorial](https://dev.mysql.com/doc/mysql-getting-started/en/)

Once you have that setup, create a `.env` file using the `.env.example` file as a template. Make sure your database credentials match.

Get a 'The Blue Alliance' API key and put it in the `.env` file. This is needed for automatic team loading for matches, making the admin's job significantly easier.

### Authentication
Charged Chickens is a secure scouting system. At every endpoint, the API validates the client's request, by ensuring that the `passphrase` header matches the expected `passphrase`. The expected passphrase is set in the `.env` file. The passphrase must be entered once by each scout but may need to be reentered every few days.

For administrators creating matches and events, the `admin_password` is required. Both the `passphrase` and `admin_password`. We recommend changing the `admin_pasword` and the passphrase every competition day. And letting your scouts and admin know.

There's also an `APPKEY`, which is used to ensure that the request is coming from a valid client, since the user never inputs(or knows) the `APPKEY`, it only exists in `generalStores.ts` Every client should have the same `APPKEY`. `APPKEY` validation exists to make sure people (from outside the team) who overhear the `passphrase` can't make requests to the API without having access to Charged Chickens.
