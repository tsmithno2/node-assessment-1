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
        //age. If used return all user objects with "age" property less than specified
        //lastname. If used return all user objects whose "last_name" property match
        //email. If used return all user objects whose "email" proptery match
        //favorites. If used return all user objects that contain the query in their favorites array
        //If no query, return the entire array

        //Set the responce variable to be an empty array and push all mnatches in. 
        //If no query send the whole userData array in the final else statement.
        let responce = [];

        //Check conditions first, and if none are met send the userData array
        
        if (req.query.age){
            let ageCheck = +req.query.age
            responce = userData.filter(user => user.age < ageCheck);
            res.status(200).send(responce);
        } else if (req.query.lastname){
            responce = userData.filter(user => user.last_name === req.query.lastname);
            res.status(200).send(responce);
        } else if (req.query.email){
            responce = userData.filter(user => user.email === req.query.email);
            res.status(200).send(responce);
        } else if (req.query.favorites){
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
        console.log("We got here to function getNonAdmins")
    },

    getCertainType: (req, res) => {
        console.log("We got here to function getCertainType")
    },

    updateUser: (req, res) => {
        console.log("We got here to function updateUser")
    },

    createNewUser: (req, res) => {
        console.log("We got here to function createNewUser")
    },

    deleteUser: (req, res) => {
        console.log("We got here to function deleteUser")
    },
 
}