//Require the userData array from the userData.json file
const userData = require("./userData.json");

//When the endpoints are hit we will use these functions to perform the desired actions
//The functions are all named in server.js. Copy and paste those names so there is no naming confusion here
module.exports = {

    //Going to put simple console.logs in each function to make sure we are at least hitting the endpoints. 
    //If all work, then we will move to writing the actual code needed to pass the postman endpoints
    //Success is defined by the correct console.log apearing in the console
    getAllUsers: (req, res) => { 
        console.log("We got here to function getAllUsers")
    }, 
    //success

    getSpecUser: (req, res) => { 
        console.log("We got here to function getSpecUser")
    },
    //success

    getAdmins: (req, res) => {
        console.log("We got here to function getAdmins")
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