#!/usr/bin/env node

/**
 * @author Girijashankar Mishra
 * @version 1.0.0
 * @since 14-August-2018
 */
var mongo = require('mongoskin');

/**
 * @author Girijashankar Mishra
 * @description Insert data in MongoDB
 * @param {connectionString,dbName,collectionName,jsonData} req 
 * @param {JSONObject} result 
 */
function create(connectionString, dbName, collectionName, jsonData, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: true
        });
        db.bind(collectionName);
        db.collection(collectionName).insert(
            jsonData,
            function (err, result) {
                var data = {};
                if (err) {
                    return callback(err, result);
                } else {
                    data["status"] = "200";
                    data["message"] = "Data Stored in DB";
                    return callback(err, data);
                }
            });

        db.close();
    } catch (err) {
        throw err;
    }

}


/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using Mongo ObjectId
 * @param {connectionString, dbName,collectionName,id} req 
 * @param {JSONObject} res 
 */
var readById = function (connectionString, dbName, collectionName, id, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        db.bind(collectionName);
        var o_id = new mongo.ObjectID(id);

        db.collection(collectionName).find({
            _id: o_id
        }).toArray(function (err, result) {
            if (err) {
                return callback(err, result);
            }
            return callback(err, result);
        });
        db.close();
    } catch (err) {
        throw err;
    }
}


/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using condition
 * @param {connectionString,dbName,collectionName,condition} req 
 * @param {JSONObject} res 
 */
var readByCondition = function (connectionString, dbName, collectionName, condition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        // var queryData = JSON.parse(condition);
        db.bind(collectionName);

        db.collection(collectionName).find(condition).toArray(function (err, result) {
            if (err) {
                return callback(err, result);
            }
            return callback(err, result);
        });
        db.close();
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Update Data in MongoDB using condition
 * @param {connectionString, dbName,collectionName,jsonData,condition} req 
 * @param {JSONObject} res 
 */
function updateData(connectionString, dbName, collectionName, jsonData, condition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: true
        });
        db.bind(collectionName);
        db.collection(collectionName).update(condition, {
            $set: jsonData
        }, function (err, result) {
            var data = {};
            if (err) {
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Updated in DB";
                return callback(err, data);
            }
        });
        db.close();
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using condition
 * @param {connectionString,dbName,collectionName,jsonData,condition} req 
 * @param {JSONObject} res 
 */
function deleteData(connectionString, dbName, collectionName, condition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: true
        });
        db.bind(collectionName);
        db.collection(collectionName).remove(condition, function (err, result) {
            var data = {};
            
            if (err) {
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Deleted from DB";
                return callback(err, data);
            }


        });
        db.close();
    } catch (err) {
        throw err;
    }
}
// }

module.exports.create = create
module.exports.readById = readById
module.exports.readByCondition = readByCondition
module.exports.update = updateData
module.exports.delete = deleteData