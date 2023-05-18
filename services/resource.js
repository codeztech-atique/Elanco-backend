const axios = require('axios');
const resourcesURL = process.env.LIST_ALL_RESOURCES_URL;

exports.listOfResource = () => {
    return new Promise((resolve, reject) => {
        axios.get(resourcesURL).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

exports.resourceDetails = (resourceName) => {
    return new Promise((resolve, reject) => {
        axios.get(resourcesURL+"/"+resourceName).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}