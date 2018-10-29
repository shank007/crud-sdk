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

## How to use crud-sdk
```sh
var crud = require('crud-sdk');

# Create (Store data in MongoDB)
crud.create(<mongodb-connection-string>, <db-name>, <collection-name>, {DATA in JSON Format}, function (err, data) {
            if (err) // do something
});

# Update (Update already data stored in MongoDB)
crud.update(<mongodb-connection-string>, <db-name>, <collection-name>, {Field/Data to be updated in JSON}, {Update Condition in JSON}, function (err, result) {
            if (err) // do something
});

# Delete (Delete a data from MongoDB)
crud.delete(<mongodb-connection-string>, <db-name>, <collection-name>, {Delete Condition in JSON}, function (err, result) {
            if (err) // do something
});

#ReadById (Read Data from MongoDB using Mongo ObjectId)
crud.readById(<mongodb-connection-string>, <db-name>, <collection-name>, <mongo-objectId>, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#ReadByCondition (Read Data from MongoDB using condition)
crud.readByCondition(<mongodb-connection-string>, <db-name>, <collection-name>, {Read Condition in JSON Format},{Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});

#ReadAll (Read All Data from MongoDB for a collection)
crud.readByCondition(<mongodb-connection-string>, <db-name>, <collection-name>, {}, function (err, result) {
            if (err) // do something
});

#Sort (Read and Sort Data from MongoDB using condition)
crud.sort(<mongodb-connection-string>, <db-name>, <collection-name>, {Read Condition in JSON Format}, { Sort Condition in JSON Format }, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});


#Aggregate (Read and Aggregate Data from MongoDB to process data records and return computed results.)
crud.aggregate(<mongodb-connection-string>, <db-name>, <collection-name>,  <aggregate-condition>, function (err, result) {
            if (err) // do something
});

#Limit (Read and Limit Data from MongoDB using condition)
crud.limit(<mongodb-connection-string>, <db-name>, <collection-name>, {Read Condition in JSON Format}, <skip-in-numbers>, <limit-in-numbers>, {Params Condition in JSON Format}, function (err, result) {
            if (err) // do something
});
```