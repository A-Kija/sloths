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


function deleteImage(id) {

    const sql = `
    SELECT url
    FROM images
    WHERE id = ?
    `;

    connection.query(sql, [id], (err, result) => {
        if (err) throw err
        if (result[0] && result[0].url) {
            fs.unlinkSync('./public/img/' + result[0].url)
        }
    });

}

function addImage(upFile) {

    let type = 'unknow';
    let file;

    if (upFile.indexOf('data:image/jpeg;base64,') === 0) {
        type = 'jpg';
        file = Buffer.from(upFile.replace('data:image/jpeg;base64,', ''), 'base64');

    } else if (upFile.indexOf('data:image/png;base64,') === 0) {
        type = 'png';
        file = Buffer.from(upFile.replace('data:image/png;base64,', ''), 'base64');

    } else if (upFile.indexOf('data:image/gif;base64,') === 0) {
        type = 'gif';
        file = Buffer.from(upFile.replace('data:image/gif;base64,', ''), 'base64');

    } else {
        file = Buffer.from(upFile, 'base64');
    }

    fileName = uuidv4() + '.' + type;

    fs.writeFileSync('./public/img/' + fileName, file);

    return fileName;
}



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

    const fileName = req.body.file !== null ? addImage(req.body.file) : null;

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

    deleteImage(req.params.id);

    const sql = `
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

    if (req.body.file || req.body.remove) {
        deleteImage(req.params.id);
    }

    
    let sql;
    let params;

    if (req.body.file || req.body.remove) {
        const fileName = req.body.file ? addImage(req.body.file) : null;
        sql = `
        UPDATE images
        SET title = ?, url = ?
        WHERE id = ?
        `;
        params = [req.body.title, fileName, req.params.id];
    } else {
        sql = `
        UPDATE images
        SET title = ?
        WHERE id = ?
        `;
        params = [req.body.title, req.params.id];
    }

    connection.query(sql, params, (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
        });
    });
});



app.listen(port, () => {
    console.log(`GALLERY is on port number: ${port}`);
});