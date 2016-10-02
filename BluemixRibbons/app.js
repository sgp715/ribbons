// provides access to cloud foundry environment
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();


// use express
var express = require('express');
var app = express();



// serve the files out of ./public as our main files
// app.use(express.static(__dirname + '/public'));
var data = {name: "Sebastian", id: "0"};


var mysql = require('mysql');


// TODO: get these from cfenv
mysqlCreds = {
                host: 'us-cdbr-iron-east-04.cleardb.net',
                port: '3306',
                user: 'bfbe56e4c4fda5',
                password: 'e667fc93',
                name: 'ad_c7b464250817373'
            };


/*var confirmUser = function(user, password){

};*/

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set user api which return the json data for a specific user
app.get('/user/:user/password/:password', function(req, res){

    var user = req.params.user;
    var password = req.params.password;
    var query = 'select * from users where user="'+user+'" and password="'+password+'" limit 1';
    connection.query(query, function(err, rows, fields) {
      if (err) {
          console.log('Error: ' + err);
      } else {
          foundUser = rows.length;
          if (foundUser == 1) {
              // res.send(JSON.stringify(rows[0]));
              res.set('Content-Type', 'application/json');
              res.set('Access-Control-Allow-Origin', '*');
              res.set('Content-Type', '["GET"]');
              res.json(rows[0]);
          } else {
              console.log('Could not find user with credentials: user=' + user + ' password=' + password);
              res.status(404).send('Not found');
          }
      }

    });

});

app.post('/user', function(req, res){

    var body = req.body;
    var name = body.name;
    var email = body.email;
    var user = body.user;
    var password = body.password;
    var query = 'insert into users (name, email, user, password) VALUES ("'+name+'", "'+email+'", "'+user+'", "'+password+'")';
    connection.query(query, function(err, rows, fields){
        if (err){
            console.log("Could not create new user: " + err);
            res.status(404).send('Not found');
        }
        res.status(200).send();
    })

});

//  TODO: confirm user with cookie
app.get('/hammocks', function(req, res){

    var query = 'select * from hammocks';
    connection.query(query, function(err, rows, fields) {
        if (err) {
            console.log('Error: ' + err);
            res.status(404).send('Not found');
        } else {
            //res.send(JSON.stringify(rows));
            res.set('Content-Type', 'application/json');
            res.set('Access-Control-Allow-Origin', '*');
            res.set('Content-Type', '["GET"]');
            res.json(rows);
        }
    });

});

// create a user
app.post('/hammocks', function(req, res){

    // TODO: maybe some form validation? can handle in React
    var body = req.body;
    console.log('body' + body);
    var name = body.name;
    var email = body.email;
    var type =  body.type;
    var suspension = body.suspension;
    var length = body.length;
    var width = body.width;
    var query = 'insert into hammocks (name, email, type, suspension, length, width) \
                values("'+name+'", "'+email+'", "'+type+'", "'+suspension+'", '+length+', '+width+')';
    connection.query(query, function(err, rows, fields){
        if (err){
            console.log("Could not create new hammock: " + err);
            res.status(404).send('Not found');
        }
        res.status(200).send();
    })
});


// set up the api that allows users to be created
//app.put('/user'), function(req, res){
// });

// connect to DB
var connection = mysql.createPool({
    connectionLimit : 10,
    host: mysqlCreds.host,
    port: mysqlCreds.port,
    user: mysqlCreds.user,  // not user
    password: mysqlCreds.password,
    database: mysqlCreds.name,
});

//connection.connect(function(){
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

//});
