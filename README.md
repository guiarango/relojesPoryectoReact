# Project RelojesColombia

The project simulates the frontend aspect of a watch ecommerce store.

## Why this project?

The project was created with goal of emulating an ecommerce and practicing the use of React.

## Technologies used

The project was mainly developed against React library for Javascript. On the database part, products and orders are created on firestore (google´s non-sql database).

## Considerations

The projects architechture consists of folders that divides the app's work. Inside the project, on the src folder, there are three subfolders that make the project work:

- [Components]: contains all the html, css and javascript that renders the project.
- [Context]: it's the container responsible of saving the cart data for the session.
- [Services]: responsilble of fetching and pushing the data to the non-sql firebase.

## Installing

To be able to install this project on your PC, you'll need to firstly clone this project. After cloning it, you'll have to install all dependencies using the next npm command: npm install. After doing that, you will just need to run on the command line the next command: npm start.
