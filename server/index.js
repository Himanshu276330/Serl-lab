const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var jwt = require('jsonwebtoken');
const JWT_KEY = "himansu";

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "himanshu@154",
    database: "serldb" // serl-db
});

app.post('/signup', (req, res) => {
    const name = req.body.name;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const address = req.body.address;

    db.query(
        "SELECT * FROM login WHERE email=(?)",
        [email],
        (err, result) => {
            if (err) {
                res.status(401).json({ sucess: false, err: err });
            } else {
                if (result.length > 0) {
                    console.log(result);
                    res.status(401).json({ sucess: false });
                } else {
                    db.query(
                        "INSERT INTO login (name,mobile,email,password,age,address) VALUES (?,?,?,?,?,?)",
                        [name, mobile, email, password, age, address],
                        (err1, result1) => {
                            if (err1) {
                                console.log(err1);
                                res.status(201).json(err1);
                            } else {
                                console.log("Inserted");
                                var token = jwt.sign(
                                    {
                                        email: email,
                                        name: name,
                                        address: address,
                                        mobile: mobile,
                                        age: age
                                    },
                                    JWT_KEY
                                );
                                res.status(200).json({ sucess: true, token: token });
                            }
                        }
                    );
                }
            }
        }
    );
});

app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log("enter " + email);
    db.query(
        "SELECT * FROM login WHERE email=(?)",
        [email],
        (err, result) => {
            if (err) {
                res.status(401).json({ sucess: false, err: err });
            } else {
                console.log(result[0]);
                if (result.length > 0) {
                    if (result[0].password == password) {
                        var token = jwt.sign(
                            {
                                email: result[0].email,
                                name: result[0].name,
                                age: result[0].age,
                                mobile: result[0].mobile,
                                address: result[0].address
                            },
                            JWT_KEY
                        );
                        res.status(200).json({ sucess: true, msg: "user find", token: token });
                    } else {
                        res.status(201).json({ sucess: false, msg: "wrong password" });
                    }
                } else {
                    res.status(201).json({ sucess: false, msg: 'user not exit' });
                }
            }
        }
    );
});


app.post('/user', (req, res) => {
    const email = req.body.email;
    db.query(
        "SELECT * FROM login WHERE email=(?)", [email],
        (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(result[0]);
            }
        }
    )
});

app.post('/project', (req, res) => {
    const email = req.body.email;
    db.query(
        "SELECT * FROM project WHERE email=(?)", [email],
        (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(result);
            }
        }
    )
});

app.get('/test', (req, res) => {
    db.query(
        "SELECT * FROM login",
        (err, result) => {
            if (err) {
                console.log('not connect');
                console.log(err);
            } else {
                // console.log(result); 
                res.send(result);
            }
        }
    );
});


app.listen(3001, () => {
    console.log("You server is running....");
});