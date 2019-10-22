#!/usr/bin/env node

/**
 * @author Girijashankar Mishra
 * @version 1.0.0
 * @since 14-August-2018
 */

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

var mongo = require('mongoskin');
var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect(DB_URI, function (err, database) {
    if (err) throw err;
    db = database;
});


/**
 * @author Girijashankar Mishra
 * @description Insert data in MongoDB
 * @param {collectionName,jsonData} req 
 * @param {JSONObject} result 
 */
function create(collectionName, jsonData, callback) {
    try {
        db.collection(collectionName).insert(
            jsonData,
            function (err, result) {
                var data = {};
                if (err) {
                    // db.close();
                    return callback(err, result);
                } else {
                    data["status"] = "200";
                    data["message"] = "Data Stored in DB";
                    data["mongoId"] = result["ops"][0]["_id"];
                    // db.close();
                    return callback(err, data);
                }
            });
    } catch (err) {
        throw err;
    }
}


/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using Mongo ObjectId
 * @param {collectionName,id, params} req 
 * @param {JSONObject} res  
 */
var readById = function (collectionName, id, params, callback) {
    try {
        var o_id = new mongo.ObjectID(id);

        db.collection(collectionName).find({
            _id: o_id
        }, params).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}


/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using condition
 * @param {collectionName,condition, params} req 
 * @param {JSONObject} res 
 */
var readByCondition = function (collectionName, condition, params, callback) {
    try {
        db.collection(collectionName).find(condition, params).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read Data from MongoDB using multiple conditions
 * @param {collectionName,condition1,condition2, params} req 
 * @param {JSONObject} res 
 */
var readByMultipleConditions = function (collectionName, condition1, condition2, params, callback) {
    try {
        db.collection(collectionName).find(condition1, condition2, params).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Update Single Records in MongoDB using condition
 * @param {connectionString, dbName,collectionName,jsonData,condition} req 
 * @param {JSONObject} res 
 */
function updateData(collectionName, jsonData, condition, callback) {
    try {
        db.collection(collectionName).update(condition, {
            $set: jsonData
        }, function (err, result) {
            var data = {};
            if (err) {
                // db.close();
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Updated in DB";
                // db.close();
                return callback(err, data);
            }
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Update Single Records in MongoDB using Mongo Id
 * @param {connectionString, dbName,collectionName,jsonData,mongoId} req 
 * @param {JSONObject} res 
 */
function updateById(collectionName, jsonData, mongoId, callback) {
    try {
        var o_id = new mongo.ObjectID(mongoId);
        db.collection(collectionName).update({
            _id: o_id
        }, {
            $set: jsonData
        }, function (err, result) {
            var data = {};
            if (err) {
                // db.close();
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Updated in DB";
                // db.close();
                return callback(err, data);
            }
        });
    } catch (err) {
        throw err;
    }
}


/**
 * @author Girijashankar Mishra
 * @description Update Multiple Records in MongoDB using condition
 * @param {connectionString, dbName,collectionName,jsonData,condition} req 
 * @param {JSONObject} res 
 */
function updateMultiple(collectionName, jsonData, condition, callback) {
    try {
        db.collection(collectionName).update(condition, {
            $set: jsonData
        }, {
            w: 1,
            multi: true
        }, function (err, result) {
            var data = {};
            if (err) {
                // db.close();
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Updated in DB";
                // db.close();
                return callback(err, data);
            }
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Delete Data from MongoDB using condition
 * @param {collectionName,jsonData,condition} req 
 * @param {JSONObject} res 
 */
function deleteData(collectionName, condition, callback) {
    try {
        db.collection(collectionName).remove(condition, function (err, result) {
            var data = {};

            if (err) {
                // db.close();
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Deleted from DB";
                // db.close();
                return callback(err, data);
            }
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Delete Data from MongoDB using MongoId
 * @param {collectionName,jsonData,mongoId} req 
 * @param {JSONObject} res 
 */
function deleteById(collectionName, mongoId, callback) {
    try {
        var o_id = new mongo.ObjectID(mongoId);
        db.collection(collectionName).remove({
            _id: o_id
        }, function (err, result) {
            var data = {};

            if (err) {
                // db.close();
                return callback(err, result);
            } else {
                data["status"] = "200";
                data["message"] = "Data Deleted from DB";
                // db.close();
                return callback(err, data);
            }
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read and Sort Data from MongoDB using condition
 * @param {collectionName,condition,sortCondition, params} req 
 * @param {JSONObject} res 
 */
var sort = function (collectionName, condition, sortCondition, params, callback) {
    try {
        db.collection(collectionName).find(condition, params).sort(sortCondition).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read and Sort Data based on limit from MongoDB using condition
 * @param {collectionName,condition,sortCondition, limit, params} req 
 * @param {JSONObject} res 
 */
var sortByLimit = function (collectionName, condition, sortCondition, skip, limit, params, callback) {
    try {
        if (limit !== parseInt(limit, 10))
            return callback({
                "error": "Limit should be integer value only."
            }, {});

        if (skip !== parseInt(skip, 10))
            return callback({
                "error": "Skip should be integer value only."
            }, {});
        db.collection(collectionName).find(condition, params).sort(sortCondition).skip(skip).limit(limit).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Indexes support the efficient resolution of queries for a collection
 * @param {collectionName,indexCondition} req 
 * @param {JSONObject} res 
 */
var index = function (collectionName, indexCondition, callback) {
    try {
        db.collection(collectionName).ensureIndex(indexCondition, function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read and Aggregate Data from MongoDB to process data records and return computed results. 
 * @param {collectionName,aggregateCondition} req 
 * @param {JSONObject} res 
 */
var aggregate = function (collectionName, aggregateCondition, callback) {
    try {
        db.collection(collectionName).aggregate(aggregateCondition, function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

/**
 * @author Girijashankar Mishra
 * @description Read and Limit Data from MongoDB, that is the number of documents that you want to be displayed. 
 * @param {collectionName,condition,skip,limit,params} req 
 * @param {JSONObject} res 
 */
var limit = function (collectionName, condition, skip, limit, params, callback) {
    try {
        if (limit !== parseInt(limit, 10))
            return callback({
                "error": "Limit should be integer value only."
            }, {});

        if (skip !== parseInt(skip, 10))
            return callback({
                "error": "Skip should be integer value only."
            }, {});

        db.collection(collectionName).find(condition, params).skip(skip).limit(limit).toArray(function (err, result) {
            if (err) {
                // db.close();
                return callback(err, result);
            }
            // db.close();
            return callback(err, result);
        });
    } catch (err) {
        throw err;
    }
}

module.exports.create = create
module.exports.readById = readById
module.exports.readByCondition = readByCondition
module.exports.readByMultipleConditions = readByMultipleConditions
module.exports.update = updateData
module.exports.updateById = updateById
module.exports.updateMultiple = updateMultiple
module.exports.delete = deleteData
module.exports.deleteById = deleteById
module.exports.sort = sort
module.exports.sortByLimit = sortByLimit
module.exports.index = index
module.exports.aggregate = aggregate
module.exports.limit = limit