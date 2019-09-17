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

/**
 * @author Girijashankar Mishra
 * @description Creates a connection with MongoDb using MongoClient
 * @param {dbConnectionUrl} req 
 * @param {JSONObject} result 
 */
// function connect(url) {
//     return MongoClient.connect(url)
// }
const dbService = {
    db: undefined,
    connect: callback => {
      MongoClient.connect(DB_URI, function(err, data) {
        if (err) {
          MongoClient.close();
          callback(err);
        }
        dbService.db = data;
        console.log("Connected to database");
        callback(null);
      });
    }
  };


  // One Time DB Connection to be established
  dbService.connect(err => {
    if (err) {
      console.log("Error: ", err);
    }
  });

export default dbService;

// module.exports = async function () {
//     let databases = await Promise.resolve(connect(DB_URI))
//     return databases;
// }