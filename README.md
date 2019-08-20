# crud-sdk
A microservice that can be used by other applications to perform all CRUD operations for MongoDB.

## SDK for developers
The crud-sdk helps developers to perform create, read, update, delete operations on MongoDB for any application.

## Deployment
The project is hosted on GitHub. 

### Prerequisites
Make sure you have Node.js 8.9.0 or higher installed. If not, install it.

```sh
# Check your node version using this command
node --version
```
```sh
# Access the SDK using below command within the project directory
npm install crud-sdk

# To save and install the SDK in your application package.json use below command within the project directory.
npm install -S crud-sdk
```
## How to pass connectionString and dbName to crud-sdk 
connectionString="<connection-string>" dbName="<db-name>" node <server-file-name>

## How to use crud-sdk
```sh
var crud = require('crud-sdk');

# Create (Store data in MongoDB)
crud.create( <collection-name>, {DATA in JSON Format}, function (err, data) {
            if (err) // do something
});

# Update (Update already data stored in MongoDB)
crud.update( <collection-name>, {Field/Data to be updated in JSON}, {Update Condition in JSON}, function (err, result) {
            if (err) // do something
});

# UpdateById (Update already data stored in MongoDB using MongoId)
crud.updateById( <collection-name>, {Field/Data to be updated in JSON}, <mongo-objectId>, function (err, result) {
            if (err) // do something
});

# UpdateMultiple (Update multiple records that are already data stored in MongoDB)
crud.updateMultiple( <collection-name>, {Field/Data to be updated in JSON}, {Update Condition in JSON}, function (err, result) {
            if (err) // do something
});

# Delete (Delete a data from MongoDB)
crud.delete( <collection-name>, {Delete Condition in JSON}, function (err, result) {
            if (err) // do something
});

# DeleteById (Delete a data from MongoDB using MongoId)
crud.deleteById( <collection-name>, <mongo-objectId>, function (err, result) {
            if (err) // do something
});

#ReadById (Read Data from MongoDB using Mongo ObjectId)
crud.readById( <collection-name>, <mongo-objectId>, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#ReadByCondition (Read Data from MongoDB using condition)
crud.readByCondition( <collection-name>, {Read Condition in JSON Format},{Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#ReadByMultipleConditions (Read Data from MongoDB using multiple condition)
crud.readByMultipleConditions( <collection-name>, {Read Condition1 in JSON Format}, {Read Condition2 in JSON Format},{Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#ReadAll (Read All Data from MongoDB for a collection)
crud.readByCondition( <collection-name>, {}, function (err, result) {
            if (err) // do something
});

#Sort (Read and Sort Data from MongoDB using condition)
crud.sort( <collection-name>, {Read Condition in JSON Format}, { Sort Condition in JSON Format }, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#SortByLimit (Read and Sort Data based on limit from MongoDB using condition)
crud.sortByLimit( <collection-name>, {Read Condition in JSON Format}, { Sort Condition in JSON Format }, <skip-in-numbers>, <limit-in-numbers>, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#Aggregate (Read and Aggregate Data from MongoDB to process data records and return computed results.)
crud.aggregate( <collection-name>,  <aggregate-condition>, function (err, result) {
            if (err) // do something
});

#Limit (Read and Limit Data from MongoDB using condition)
crud.limit( <collection-name>, {Read Condition in JSON Format}, <skip-in-numbers>, <limit-in-numbers>, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});
```