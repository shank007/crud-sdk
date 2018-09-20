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

/**
 * @author Girijashankar Mishra
 * @description Read and Sort Data from MongoDB using condition
 * @param {connectionString,dbName,collectionName,condition,sortCondition} req 
 * @param {JSONObject} res 
 */
var sort = function (connectionString, dbName, collectionName, condition, sortCondition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        // var queryData = JSON.parse(condition);
        db.bind(collectionName);

        db.collection(collectionName).find(condition).sort(sortCondition).toArray(function (err, result) {
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
 * @description Indexes support the efficient resolution of queries for a collection
 * @param {connectionString,dbName,collectionName,indexCondition} req 
 * @param {JSONObject} res 
 */
var index = function (connectionString, dbName, collectionName, indexCondition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        // var queryData = JSON.parse(condition);
        db.bind(collectionName);

        db.collection(collectionName).ensureIndex(indexCondition, function (err, result) {
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
 * @description Read and Aggregate Data from MongoDB to process data records and return computed results. 
 * @param {connectionString,dbName,collectionName,condition,sortCondition} req 
 * @param {JSONObject} res 
 */
var aggregate = function (connectionString, dbName, collectionName, condition, aggregateCondition, callback) {
    try {
        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        // var queryData = JSON.parse(condition);
        db.bind(collectionName);

        db.collection(collectionName).aggregate(aggregateCondition, function (err, result) {
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
 * @description Read and Limit Data from MongoDB, that is the number of documents that you want to be displayed. 
 * @param {connectionString,dbName,collectionName,condition,sortCondition} req 
 * @param {JSONObject} res 
 */
var limit = function (connectionString, dbName, collectionName, condition, limit, callback) {
    try {
        if (limit !== parseInt(limit, 10))
            return callback({"error":"Limit should be integer value only."}, {});


        var db = mongo.db(connectionString + dbName, {
            native_parser: false
        });
        // var queryData = JSON.parse(condition);
        db.bind(collectionName);

        db.collection(collectionName).find(condition).limit(limit).toArray(function (err, result) {
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

module.exports.create = create
module.exports.readById = readById
module.exports.readByCondition = readByCondition
module.exports.update = updateData
module.exports.delete = deleteData
module.exports.sort = sort
module.exports.index = index
module.exports.aggregate = aggregate
module.exports.limit = limit