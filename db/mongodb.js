var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/**
 * connection to the database
 */
var connect = function(){
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if(err)
                throw err;
            console.log("Connection successfull");
            resolve(client);
        })
    })
};

/**
 * find all patients
 * @param {string} dbName 
 */
var findAllPatients = function(dbName){
    return new Promise((resolve, reject) => {
        connect().then((client) => {
            var db = client.db(dbName);
            db.collection('patient').find({}).toArray((err, result) => {
                resolve(result);
                client.close();
            })
        })
    })
}



 exports.findAllPatients = findAllPatients;