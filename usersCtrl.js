//Require the userData array from the userData.json file
const userData = require("./userData.json");

//When the endpoints are hit we will use these functions to perform the desired actions
//The functions are all named in server.js. Copy and paste those names so there is no naming confusion here
module.exports = {

    //Going to put simple console.logs in each function to make sure we are at least hitting the endpoints. 
    //If all work, then we will move to writing the actual code needed to pass the postman endpoints
    //REMINDER ALL QUERIES WILL BE STRINGS IN THE JSON DOCU8MENT THERE ARE INTEGERS WE MAY NEED TO CHANGE THE STRINGS TO INTEGERS
    
   getAllUsers: (req, res) => {
        console.log("We got here to function getAllUsers");
        //We need to be ready to see if a query is used. 
        //The possibilities are,
        //age, lastname, email, favorites
        //If no query, return the entire array

        //Set the responce variable to be an empty array and push all mnatches in. 
        //If no query send the whole userData array in the final else statement.
        let responce = [];

        //Check conditions first, and if none are met send the userData array
        
        if (req.query.age){
            //age. If used return all user objects with "age" property less than specified
            let ageCheck = +req.query.age
            responce = userData.filter(user => user.age < ageCheck);
            res.status(200).send(responce);

        } else if (req.query.lastname){
            //lastname. If used return all user objects whose "last_name" property match
            responce = userData.filter(user => user.last_name === req.query.lastname);
            res.status(200).send(responce);

        } else if (req.query.email){
            //email. If used return all user objects whose "email" proptery match
            responce = userData.filter(user => user.email === req.query.email);
            res.status(200).send(responce);

        } else if (req.query.favorites){
            //favorites. If used return all user objects that contain the query in their favorites array
            responce = userData.filter(user => user.favorites.includes(req.query.favorites));
            res.status(200).send(responce);

        } else {

            res.status(200).send(userData);
        }
    }, 
    //success

    getSpecUser: (req, res) => { 
        console.log("We got here to function getSpecUser ", req.params.userId);
        //First check to see that the id provided actually exists in the array. 
        //If not, return res.status(404).json(null)
        if (+req.params.userId <= userData.length){
            //Set up a variable to a filter where the id from req.params.userId is the condition
            const userRes = userData.filter(user => user.id === +req.params.userId);
            res.status(200).send(userRes[0]); 
        } else {
           res.status(404).json(null);
        }
    },
    //success

    getAdmins: (req, res) => {
        console.log("We got here to function getAdmins");
        //First we set a variable equal to a filter of the userData array where each user has a "type" of "admin"
        const admins = userData.filter(user => user.type === "admin");
        //Then we send the admins as well as a status of 200
        res.status(200).send(admins);
    },
    //success

    getNonAdmins: (req, res) => {
        console.log("We got here to function getNonAdmins");
        //First we set a variable equal to a filter
        //However in the array there are 3 possibile types
        //admin, moderator, user
        //we must get 2 of the three
        const normies = userData.filter(user => user.type === "moderator" || user.type === "user");
        //Then send over the normies as well as a status 200
        res.status(200).send(normies);
    },
    //success

    getCertainType: (req, res) => {
        console.log("We got here to function getCertainType");
        //First check to see if the paramter is either amdin, moderator, or user
        if (req.params.type === "admin" || req.params.type === "moderator" || req.params.type === "user"){
        //If true, set a variable equal to a filter where the parameter is equal to req.params.type
        const typeArr = userData.filter(user => user.type === req.params.type);
        res.status(200).send(typeArr);    
        } else {
            //Else return not found
            res.status(404).send("Type Not Found :( Sorry my dude.");
        }
    },
    //success

    updateUser: (req, res) => {
        console.log("We got here to function updateUser ", userData[+req.params.userId]);
        //First splice the body of the request to the id of the params. 
        //Alternatively, since the body will contain an "id" we dont actually need params
        //Remember, the id is 1 higher than the index we need to modiy
        userData.splice(+req.params.userId - 1, 1, req.body);
        //Send userData back along with a status 200
        res.status(200).send(userData);
    },
    //success

    createNewUser: (req, res) => {
        console.log("We got here to function createNewUser");
        //First since we are creating a new user, the id will not be prvided in req.body, we must assign it
        req.body.id = userData.length + 1;
        //Next splice it into the array
        userData.splice(userData.length, 0, req.body);
        //Finally send the array back with a status 200
        res.status(200).send(userData);
    },
    //success

    deleteUser: (req, res) => {
        console.log("We got here to function deleteUser");
        //First we splice the user from the array
        //Remember, the id is 1 higher than the index we need to modiy
        userData.splice(+req.params.userId - 1, 1);
        //Then send back the array with a staus code of 200
        res.status(200).send(userData);
    }
    //success
}