//first server set up boilerplate 
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//code to run the server check to see if listening
app.listen(3000, () => {
    console.log('Listening on:', 3000)
})
