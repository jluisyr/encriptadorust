var express = require('express'),
app = express(),
port = process.env.port || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jluisyanezrodriguez:266487Grunts@cluster0-shard-00-00-wnm9i.mongodb.net:27017,cluster0-shard-00-01-wnm9i.mongodb.net:27017,cluster0-shard-00-02-wnm9i.mongodb.net:27017/tasks?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);
console.log('todo list RESTful API server startd on: ' + port);