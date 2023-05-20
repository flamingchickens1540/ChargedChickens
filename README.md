# Charged Chickens

Team 1540's scouting system for FRC 2023, Charged Up!

Todo:
- [ ] Write about the database architecture
- [ ] Write about the frontend design
- [ ] Write about the typing and structure so things don't get confusing with all the names (eg. TeamMatch vs Match vs Team)

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

#### Match 
This endpoints basically just takes in all the data from a match, including the cycle and defense times, and puts them in the database. [Request made from here](/src/lib/components/match-scout-components/Submit.svelte)

#### Pit
This endpoint takes in the event and team keys as well as the pit-scouting data and inserts it into the database. [Request made from here](/src/lib/components/pit-scout-components/Submit.svelte)

#### Photo
This endpoint is slightly more complex. Requests to this route must an array or object of photos, and a team and event key. First, the team and event keys are validated by checking if they both match their expected format (see the validateInput function at this endpoint's route). In the future, this could extend to also making sure that the given team is present at the event, using a request to TBA's API. Then each photo is validated by making sure they all less than one gigabyte in size. Finally, all the photos are inserted into the database. [Request made from here](/src/routes/photo/+page.svelte)

### Admin
This route is by far the most complex, and contains several endpoints, assign, authed, make-event, and teams. Each one is used for a different perpose by the admin, and should only be accessable by the admin. Each of these endpoints requires the admin password header to succeed. [All requests made from here](/src/routes/admin-dashboard/+page.svlete)

#### Assign
This endpoint is used to assign a match to queued scouts, and to insert a match (not a TeamMatch) into the database. It takes a request containing the data known about the match before it's played. This includes which robots are playing on what alliance, the match key, and the event key. [See the AssignData Type](/src/lib/types.ts). 

#### Authed
This is a simple endpoint that just checks if the admin has the right admin_password, by checking the header.

#### Teams
This endpoint takes in a match key as the request, then queries The Blue alliance to find which teams on on the alliances, then returns the two lists of team_keys. This data is used by the admin dashboard to autofill teams after a match is entered. This is used toreduce the admin's workload.

#### Make-Event
This endpoint inserts an empty event into the database. The request body should contain an [EventKey](/src/lib/types.ts).

## Server

### Setup
We use a MySQL databse hosted on team 1540's server.

To set up a database, check out [this MySQL tutorial](https://dev.mysql.com/doc/mysql-getting-started/en/)

Once you have that set up, create a .env file using the .env.example file as a template. Make sure your database credientials match.

### Authentication
Charged Chickens is a realively secure scouting system. At every endpoint, the API validates the clients request, by ensuring that the request header password matches the expected password.

For administrators creating matches and events, the admin_password is needed, for the scouts, the passphrase is needed. Both the passphrase and admin_password. We recommend changing the admin_pasword and the passphrase every competition day.

There's also an appkey, this is used to ensure that the requset is coming from a valid client, since the user never inputs(or knows) the appkey, it only exists in generalStores.ts Every client should have the same appkey. Appkey validation exists to make sure peoeple (from outside the team) who overhear the passphase can't make requests to the API without having access to Charged Chickens.
