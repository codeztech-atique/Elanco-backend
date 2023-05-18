const config = require('config');
const memoryCache = require('../cache/index');
const applicationService = require('../services/application');


exports.getAllApplications = async(req, res) => {
    try {
        const result = await applicationService.listOfApplication();
        memoryCache.setCache(config.get('listApplication'), result, config.get('setCacheTTLInSeconds')); 
        res.status(config.get('success.statusCode')).send(result);
    } catch(err) {
        const getData = memoryCache.getCache(config.get('listApplication'));
        if(!getData) {
            res.status(config.get('error.statusCode')).send({
                error: err
            })
        } else {
            res.status(config.get('success.statusCode')).send(getData);
        }
    }
}

exports.getApplicationDetails = async(req, res) => {
    try {
        const applicationName = req.params.name;
        const result = await applicationService.applicationDetails(applicationName);
        memoryCache.setCache(applicationName, result, config.get('setCacheTTLInSeconds')); 
        res.status(config.get('success.statusCode')).send(result)
    } catch(err) {
        const getData = memoryCache.getCache(req.params.name);
        if(!getData) {
            res.status(config.get('error.statusCode')).send({
                error: err
            })
        } else {
            res.status(config.get('success.statusCode')).send(getData);
        }
    }
}
