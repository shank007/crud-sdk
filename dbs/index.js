#!/usr/bin/env node

/**
 * @author Girijashankar Mishra
 * @version 1.0.0
 * @since 20-August-2019
 */

const mongo = require('mongoskin');
const MongoClient = mongo.MongoClient;  

// Get Connsection String and Database Name from the environment variables set while 
// running the application server.
const DB_URI = process.env.connectionString + process.env.dbName;
console.log(DB_URI)
try {
    if (!process.env.connectionString) {
        throw "Please provide the ConnectionString."
    }

    if (!process.env.dbName) {
        throw "Please provide the DbName."
    }

    
} catch (err) {
    throw err;
}

function connect(url) {
    // console.log(MongoClient.connect(url))
    return MongoClient.connect(url)
    // return mongo.db(url, {
    //     native_parser: true
    // });
}

module.exports = async function () {
    let databases = await Promise.resolve(connect(DB_URI))
    // console.log('Inside Index.js ====> ',databases)
    // return {
    //     db: databases[0]
    // }
    return databases;
}