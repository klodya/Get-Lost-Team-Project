var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/cities', function (req, res) {
 var url = "mongodb://localhost:27017/cities";
 MongoClient.connect(url, function(err, db){
  var collection = db.collection('cities');
  collection.find({}).toArray(function(err, docs){
    res.json(docs);
    db.close();
  })
 })
})


app.post('/cities', function(req, res){
  var url = "mongodb://localhost:27017/cities";
  console.log(req.body)
  MongoClient.connect(url, function(err,db){
    var collection = db.collection('cities');
    
    collection.insert(
    {
      name: req.body.name,
      places: req.body.places
    }
    )
    var collection = db.collection('cities');
    collection.find({}).toArray(function(err, docs){

       res.write(JSON.stringify(docs));
      //console.log(res.body);
      res.status(200).end();
      db.close();
    })
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});