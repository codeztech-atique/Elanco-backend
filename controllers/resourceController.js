const config = require('config');
const resourceService = require('../services/resource');

exports.getAllResources = async(req, res) => {
    try {
        const result = await resourceService.listOfResource();
        res.status(config.get('success.statusCode')).send(result);
    } catch(err) {
        res.status(config.get('error.statusCode')).send({
            error: err
        })
    }
}

exports.getResourceDetails = async(req, res) => {
    try {
        const resourceName = req.params.name;
        const result = await resourceService.resourceDetails(resourceName);
        res.status(config.get('success.statusCode')).send(result);
    } catch(err) {
        res.status(config.get('error.statusCode')).send({
            error: err
        })
    }
}
