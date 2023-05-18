const config = require('config');
const applicationService = require('../services/application');


exports.getAllApplications = async(req, res) => {
    try {
        const result = await applicationService.listOfApplication();
        res.status(config.get('success.statusCode')).send(result);
    } catch(err) {
        res.status(config.get('error.statusCode')).send({
            error: err
        })
    }
}

exports.getApplicationDetails = async(req, res) => {
    try {
        const applicationName = req.params.name;
        const result = await applicationService.applicationDetails(applicationName);
        res.status(config.get('success.statusCode')).send(result)
    } catch(err) {
        res.status(config.get('error.statusCode')).send({
            error: err
        })
    }
}
