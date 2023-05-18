const config = require('config');
const memoryCache = require('../cache/index');
const resourceService = require('../services/resource');

exports.getAllResources = async(req, res) => {
    try {
        const result = await resourceService.listOfResource();
        memoryCache.setCache(config.get('listResource'), result, config.get('setCacheTTLInSeconds')); 
        res.status(config.get('success.statusCode')).send(result);
    } catch(err) {
        const getData = memoryCache.getCache(config.get('listResource'));
        if(!getData) {
            res.status(config.get('error.statusCode')).send({
                error: err
            })
        } else {
            res.status(config.get('success.statusCode')).send(getData);
        }
    }
}

exports.getResourceDetails = async(req, res) => {
    try {
        const resourceName = req.params.name;
        const result = await resourceService.resourceDetails(resourceName);
        memoryCache.setCache(resourceName, result, config.get('setCacheTTLInSeconds')); 
        res.status(config.get('success.statusCode')).send(result);
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
