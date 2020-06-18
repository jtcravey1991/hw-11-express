# hw-11-express
Homework 11 Express Homework: Note Taker

## Description

This week's homework was to utilize node and express to create a server based apllication which could take user input in the form of notes, save this to a file, then access them to display or delete. We used express to create api endpoints as well as handle website pathing.

## Usage

To use the app, the user starts the server by using the terminal command 'node server.js' while in the root directory. Then, you can access localhost:8080 to get to the home page. Press the get started button to access the notes page. From here you can name and type your note, save it, and see a list of saved notes which you can access or delete. Here is a quick gif of the application being run:

![a user saving and deleting notes](/images/runningapp.gif)

## Code

The main functionality we added this week was the express syntax, which can be used to handle get, post, delete and other requests from the website. Here is a sample of how some of these requests are handled:

![a sample of express.js code to handle server requests](/images/code.JPG)