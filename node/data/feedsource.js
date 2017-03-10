var MongoClient = require('mongodb').MongoClient;
var config = require("../config");

module.exports = function(args){
    var filter = {};
    if(args.category) filter['Category'] = args.category;
    return new Promise(function(resolve,reject){
        MongoClient.connect(config.mongodb.mongolab_connection,function(err,db){
            if(err) throw Error(err);
            console.log("Connect to mongodb server");
            var coll = db.collection("FeedSource");
            coll.find(filter).toArray(function(err,doc){
                if(err) throw Error(err);
                db.close();
                resolve({ feed_sources: doc});
            });
        });
    });
}