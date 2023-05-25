const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({limit: '10mb'}));
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


const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'images'
});
connection.connect();



app.get('/images', (_, res) => {
    const sql = `
        SELECT *
        FROM photos
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});


app.post('/images', (req, res) => {
    const sql = `
    INSERT INTO photos (title, file)
    VALUES (?, ?)
    `;
    connection.query(sql, [req.body.title, req.body.file], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'ok',
                title: 'Trees',
                text: 'New tree was planted!'
            }
        });
    });
});


app.delete('/images/:id', (req, res) => {
    const sql = `
        DELETE FROM photos
        WHERE id = ?
    `;
    connection.query(sql, [req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Trees',
                text: 'The tree was cut!'
            }
        });
    });
});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
// app.put('/trees/:id', (req, res) => {
//     const sql = `
//         UPDATE trees
//         SET title = ?, height = ?, type = ?
//         WHERE id = ?
//     `;
//     connection.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err, _) => {
//         if (err) throw err
//         res.json({
//             status: 'ok',
//             showMessage: {
//                 type: 'info',
//                 title: 'Trees',
//                 text: 'The tree was updated!'
//             }
//         });
//     });
// });



app.listen(port, () => {
    console.log(`GALLERY is on port number: ${port}`);
});