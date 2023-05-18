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

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/trees', (req, res) => {
    const sql = `
    INSERT INTO trees (title, height, type)
    VALUES (?, ?, ?)
    `;
    connection.query(sql, [req.body.title, req.body.height, req.body.type], (err, _) => {
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

// DELETE FROM table_name WHERE condition;
app.delete('/trees/:id', (req, res) => {
    const sql = `
        DELETE FROM trees
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
app.put('/trees/:id', (req, res) => {
    const sql = `
        UPDATE trees
        SET title = ?, height = ?, type = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Trees',
                text: 'The tree was updated!'
            }
        });
    });
});


// TYPES

// SELECT column1, column2, ...
// FROM table_name;
app.get('/types', (req, res) => {
    const sql = `
        SELECT id, title
        FROM types
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err
        res.json({
            status: 'ok',
            result
        });
    });
});



// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/types', (req, res) => {
    const sql = `
    INSERT INTO types (title)
    VALUES (?)
    `;
    connection.query(sql, [req.body.title], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'ok',
                title: 'Types',
                text: 'New type was created!'
            }
        });
    });
});

// DELETE FROM table_name WHERE condition;
app.delete('/types/:id', (req, res) => {
    const sql = `
        DELETE FROM types
        WHERE id = ?
    `;
    connection.query(sql, [req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Types',
                text: 'The type was deleted!'
            }
        });
    });
});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/types/:id', (req, res) => {
    const sql = `
        UPDATE types
        SET title = ?
        WHERE id = ?
    `;
    connection.query(sql, [req.body.title, req.params.id], (err, _) => {
        if (err) throw err
        res.json({
            status: 'ok',
            showMessage: {
                type: 'info',
                title: 'Types',
                text: 'The type was updated!'
            }
        });
    });
});


// SELECT COUNT(CustomerID), Country
// FROM Customers
// GROUP BY Country;

// TYPES COUNT
app.get('/types-count', (req, res) => {
    const sql = `
        SELECT COUNT(type) AS count, type
        FROM trees
        GROUP BY type
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