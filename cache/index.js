const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const chalk = require('chalk');

module.exports.setCache = (key, data, ttl) => {
   console.log(chalk.red("Setting up memory cache:", key));
   myCache.set(key, data, ttl); // Set for 12 Hours
}

module.exports.getCache = (key) => {
    console.log(chalk.red("Reading from memory cache:", key));
    const getData = myCache.get(key);
    if(getData) {
       return getData;
    }
}