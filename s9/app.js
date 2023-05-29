const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'))
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
        FROM images
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

    let fileName = null;

    if (req.body.file !== null) {

        let type = 'unknow';
        let file;

        if (req.body.file.indexOf('data:image/jpeg;base64,') === 0) {
            type = 'jpg';
            file = Buffer.from(req.body.file.replace('data:image/jpeg;base64,', ''), 'base64');

        } else if (req.body.file.indexOf('data:image/png;base64,') === 0) {
            type = 'png';
            file = Buffer.from(req.body.file.replace('data:image/png;base64,', ''), 'base64');

        } else if (req.body.file.indexOf('data:image/gif;base64,') === 0) {
            type = 'gif';
            file = Buffer.from(req.body.file.replace('data:image/gif;base64,', ''), 'base64');

        } else {
            file = Buffer.from(req.body.file, 'base64');
        }

        fileName = uuidv4() + '.' + type;

        fs.writeFileSync('./public/img/' + fileName, file);

    }

    const sql = `
    INSERT INTO images (title, url)
    VALUES (?, ?)
    `;
    connection.query(sql, [req.body.title, fileName], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
    });
});


app.delete('/images/:id', (req, res) => {

    let sql;
    sql = `
    SELECT url
    FROM images
    WHERE id = ?
    `;

    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err
        if (result[0] && result[0].url) {
            fs.unlinkSync('./public/img/' + result[0].url)
        }
    });

    sql = `
        DELETE FROM images
        WHERE id = ?
    `;
    connection.query(sql, [req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
    });
});


app.put('/images/:id', (req, res) => {
    const sql = `
        UPDATE photos
        SET title = ?, file = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.title, req.body.file ? req.body.file : null, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
    });
});



app.listen(port, () => {
    console.log(`GALLERY is on port number: ${port}`);
});