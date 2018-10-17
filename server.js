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

//1 'GET' call for and receive an array of all user objects along with status 200 where certain things may or may not be specified in req.query
app.get("/api/users", controller.getAllUsers);

//2 'GET' call for a specific user with the user id and receive that specific user object along with status 200
//extra note: Spec is short for Specific so the entire function is getSpecificUser. Didn't feel like typing it all out
app.get("/api/users/:userId", controller.getSpecUser);

//3 'GET' call for all users with admin permissions and recieve that array along with status 200. Specific pair we are looking for is "type" : "admin"
app.get("/api/admins", controller.getAdmins);

//4 'GET' call for all user objects that are not admins and send that array of objects along with status 200. The code is vauguely going to look like, "get all users where "type" !== "admin". "
app.get("/api/nonadmins", controller.getNonAdmins);

//5 'GET' call for an array of user objects where "type" is defined in the params and receive that array along with status 200
app.get("/api/user_type/:type", controller.getCertainType);

//6 'PUT' call with an update object for a specific user object defined with user id in the paramaters of the url and receive that object along with status 200
app.put("/api/users/:userId", controller.updateUser);

//7 'POST' call to create a new user object. The id will not be included and will need to created sequentially from the alst id + 1. Respond with the entire user array AFTER the new user is created along with status 200  
app.post("/api/users", controller.createNewUser);

//8 'DELETE' call to delete a specific user object from the array whose id wil be specified with the userId parameter. Respond witht he entire user array AFTER the specified user is deleted along with status 200
app.delete("/api/users/:id", controller.deleteUser);