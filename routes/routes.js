const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


// // Middleware
// const middleware = require('../middleware/headerValidation');

// Controller
const applicationController = require('../controllers/applicationController');
const resourceController = require('../controllers/resourceController');



// Sample API testing without bearerTokenPresent
app.get('/', (req, res) => {
   res.status(200).send({
      message:'App is working fine!'
   });
});


// Get List Of Applications
app.get('/applications', (req, res) => { // No Middleware
    applicationController.getAllApplications(req, res);
});

// Get Application in details
app.get('/applications/:name', (req, res) => { // No Middleware
    applicationController.getApplicationDetails(req, res);
});

// Get List Of Resources
app.get('/resources', (req, res) => { // No Middleware
    resourceController.getAllResources(req, res);
});

// Get Resources in details
app.get('/resources/:name', (req, res) => { // No Middleware
    resourceController.getResourceDetails(req, res);
});

module.exports = app;
