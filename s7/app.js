const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'africa'
});
connection.connect();



// TREES

// SELECT column1, column2, ...
// FROM table_name;

app.get('/trees', (req, res) => {
    const sql = `
        SELECT id, height, type, title
        FROM trees
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});



app.listen(port, () => {
    console.log(`PARK is on port number: ${port}`);
});