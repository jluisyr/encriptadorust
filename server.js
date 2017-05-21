var express = require('express'),
app = express(),
server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
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


app.listen(server_port, server_ip_address, function(){
  console.log('todo list RESTful API server startd on: '+ server_ip_address + ':' + server_port);
});
