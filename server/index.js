const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'cruddatabase',
    port:3306
});

/*
db.getConnection(function (err, connection) {
    console.log("connected");
})*/

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const  sqlSelect ="SELECT * FROM book_reviews"

    db.query(sqlSelect,(err, result)=>{
        try {
            res.send(result);
        } catch (error) {
            console.log(err);
        }
    })
})

app.post('/api/insert', (req, res) => {
    const bookName = req.body.bookName;
    const bookReview = req.body.bookReview;

    const sqlInsert = "INSERT INTO book_reviews(bookName, bookReview)  VALUES (?,?)";
    db.query(sqlInsert,[bookName, bookReview], (err, result) => {
        try {
            console.log(result);
        } catch (error) {
            console.log(err);
        }
    });
});

app.listen(3001, ()=>{
    console.log("running on port 3001");
});