//first server set up boilerplate 
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//code to run the server check to see if listening
app.listen(3000, () => {
    console.log('Listening on:', 3000)
})

// Listening success on to importing controller
// Time to require the controller file so we can put all of our code there to make this file easier to read
const controller = require("./usersCtrl.js")

//Endpoint Sudo code and enpoint descriptions
//all endpoint urls are defined in the postman test collection. If I name the url differently, postman will not reach it and register it as an error 
//1 'GET' call for and receive an array of all user objects along with status 200


//2 'GET' call for a specific user with the user id and receive that specific user object along with status 200


//3 'GET' call for all users with admin permissions and recieve that array along with status 200. Specific pair we are looking for is "type" : "admin"


//4 'GET' call for all user objects that are not admins and send that array of objects along with status 200. The code is vauguely going to look like, "get all users where "type" !== "admin". "


//5 'GET' call for an array of user objects where "type" is defined in the params and receive that array along with status 200


//6 'PUT' call with an update object for a specific user object defined with user id in the paramaters of the url and receive that object along with status 200


//7 'POST' call to create a new user object. The id will not be included and will need to created sequentially from the alst id + 1. Respond with the entire user array AFTER the new user is created along with status 200  
a

//8 'DELETE' call to delete a specific user object from the array whose id wil be specified with the userId parameter. Respond witht he entire user array AFTER the specified user is deleted along with status 200
