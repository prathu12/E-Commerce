var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');


var app = express();


app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Welcome to D-Mart');
})
app.get('/showProduct', function (req, res) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM product", function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
})
app.post('/addUserData', function (req, res) {
    var mysql = require('mysql');
    var data = req.body
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query(`INSERT INTO userdetails(id, name, contact, email, password) VALUES ('null','${data.name}','${data.contact}','${data.email}','${data.password}')`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
})

//==========Userlogin===========
app.post('/login', function (req, res) {
    var mysql = require('mysql');
    var { email, password } = req.body
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM `userdetails`", function (err, result) {
            if (err) throw err;
            var a;
            let user = result.find(u => u.email === email && u.password === password)
            if (user) {
                res.send(a = true);
            }
            else {
                console.log("Invalid email or password");
                res.send(a = false)
            }
            console.log(result);
        });
    });
})


//========Admin login============
app.post('/adminlogin', function (req, res) {
    var mysql = require('mysql');
    var { email, password } = req.body
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM `admin`", function (err, result) {
            if (err) throw err;
            var a;
            let user = result.find(u => u.email === email && u.password === password)
            if (user) {
                res.send(a = true);
            }
            else {
                console.log("Invalid email or password");
                res.send(a = false)
            }
            console.log(result);
        });
    });
})
//========Select data for update============
app.post('/selectOneData', function (req, res) {
    var mysql = require('mysql');
    var data = req.body
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query(`SELECT * FROM product WHERE id = '${data.id}'`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
        });
    });
})
//========Delete Admin Data============
app.post('/deleteOneData', function (req, res) {
    var mysql = require('mysql');
    var data = req.body
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "e_commerce"
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query(`DELETE * FROM product WHERE id = '${data.id}'`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
        });
    });
})
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  