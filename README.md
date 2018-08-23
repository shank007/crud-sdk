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
# Access the SDK using below command 
npm install c8na-crud

# To save and install the SDK in your application package.json use below command.
npm install -S c8na-crud
```

## How to use crud-sdk
```sh
var crud = require('c8na-crud');

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
crud.readById(<mongodb-connection-string>, <db-name>, <collection-name>, <mongo-objectId>, function (err, result) {
            if (err) // do something
});

#ReadByCondition (Read Data from MongoDB using condition)
crud.readByCondition(<mongodb-connection-string>, <db-name>, <collection-name>, {Read Condition in JSON Format}, function (err, result) {
            if (err) // do something
});
```