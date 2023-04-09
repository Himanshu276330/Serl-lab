const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "himanshu@154",
    database: "serldb"
});

app.post('/create',(req,res)=>{
    const name=req.body.name;
    const mobile=req.body.mobile;
    const email=req.body.email;
    const password=req.body.password;
    const age=req.body.age;
    const address=req.body.address;

    db.query(
        "INSERT INTO login (name,mobile,email,password,age,address) VALUES (?,?,?,?,?,?)" ,
        [name,mobile,email,password,age,address],
        (err,result) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                console.log("Inserted");
            }
        }
    );
});

app.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query(
        "SELECT  FROM login",
        (err,result)=>{
            if(err){
                console.log('not connect');
                console.log(err);
            }else{
                console.log(result); 
            }
        }  
    );

    db.query(
        "INSERT INTO login (name,mobile,email,password,age,address) VALUES (?,?,?,?,?,?)" ,
        [name,mobile,email,password,age,address],
        (err,result) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                console.log("Inserted");
            }
        }
    );
});

app.get('/test',(req,res)=>{
    db.query(
        "SELECT * FROM login" ,
        (err,result)=>{
            if(err){
                console.log('not connect');
                console.log(err);
            }else{
                // console.log(result); 
                res.send(result);
            }
        }  
    );
});


app.listen(3001,()=>{
    console.log("You server is running....");
});