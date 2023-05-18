const axios = require('axios');
const applicationURL = process.env.LIST_ALL_APPLICATION_URL;

exports.listOfApplication = () => {
    return new Promise((resolve, reject) => {
        axios.get(applicationURL).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

exports.applicationDetails = (applicationName) => {
    return new Promise((resolve, reject) => {
        axios.get(applicationURL+"/"+applicationName).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}