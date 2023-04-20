const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'CRUDDataBase',
    port:3306
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const  sqlSelect ="SELECT * FROM book_reviews"
    db.query(sqlSelect,(err, result)=>{
        console.log(result);
    })
})


app.post('/api/insert', (req, res) => {
    const bookName = req.body.bookName;
    const bookReview = req.body.bookReview;

    const sqlInsert = "INSERT INTO book_reviews (bookName, bookReview)  VALUES (?,?)";
    db.query(sqlInsert,[bookName, bookReview],(err, result) => {
        console.log(err); 
    });
});

app.listen(3001, ()=>{
    console.log("running on port 3001");
});