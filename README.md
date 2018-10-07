# Magic Carpet Front End App

Magic Carpet is an All-In-One Adventure App that selects a restaurant based on given criteria and arranges a Lyft to the unknown destination. Don’t know where to eat? Too many options? Too many opinions??? We’ll handle it. One button. One Adventure.

## Application Description
* Tech Stack: React frontend and Rails API backend. PostgreSQL database. Yelp and Lyft APIs.

* How It Works: After authenticating with Lyft OAuth, the user can set restaurant preferences (currently distance, rating and price).  The user then presses the "Magic Carpet" button which returns a cost estimate for the Lyft ride.  If the price is confirmed, a Lyft is fetched for the user and a screen appears with 3 reviews of the restaurant and a button to cancel the ride.

## Screen Shots

![Log-In Page]('/public/images/app.gif')



## Initial Setup

1. Clone the repository

 ```shell
 git clone git@github.com:hmesander/magic-carpet-frontend.git
 ```
2. Navigate to the `magic-carpet-frontend` directory

 ```shell
 cd magic-carpet-frontend
 ```

3. Install the dependencies

 ```shell
 yarn install
 ```

OR

 ```shell
  npm install
 ```

<hr>

## Running the Server Locally

To see your code in action locally, you need to fire up a development server. Use the command:

 ```shell
  HTTPS=true yarn start
 ```

 OR

 ```shell
  set HTTPS=true && npm start
 ```

Once the server is running, visit the app in your browser:

* `http://localhost:3000/` to run your application.


Note that some features of the app will not function properly due to lacking environmental variables (Lyft API key).

<hr>

## Deployments
* Front end is deployed here with Heroku: https://magic-carpet-app.herokuapp.com/
