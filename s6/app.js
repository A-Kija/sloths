const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const doAuth = function(req, res, next) {

    if (req.url.indexOf('/admin') === 0 ||
        req.url.indexOf('/profile') === 0 ||
        req.url.indexOf('/logout') === 0) {

        let data = fs.readFileSync('./Data/users.json', 'utf8');
        data = JSON.parse(data);

        const user = req.cookies.siteSession ?
            data.find(u => u.session === req.cookies.siteSession) :
            null;

        if (!user) {
            res.status(401).json({ status: 'error1' });
        } else {
            if (req.url.indexOf('/admin') === 0 && user.role !== 'admin') {
                console.log(req.url)
                res.status(401).json({ status: 'error2' });
            } else if (req.url.indexOf('/profile') === 0 && (user.role !== 'admin' && user.role !== 'user')) {
                res.status(401).json({ status: 'error3' });
            } else if (req.url.indexOf('/logout') === 0 && (user.role !== 'admin' && user.role !== 'user')) {
                res.status(401).json({ status: 'error4' });
            } else {
                next();
            }
        }
    } else {
        next();
    }
}

app.use(doAuth);


// LOGIN

app.post('/login', (req, res) => {
    let data = fs.readFileSync('./Data/users.json', 'utf8');
    data = JSON.parse(data);
    const email = req.body.email;
    const pass = md5(req.body.pass);

    const user = data.find(u => u.email === email && u.pass === pass);

    if (user) {
        const sessionId = uuidv4();
        res.cookie('siteSession', sessionId);
        data = data.map(u => u.id === user.id ? {...u, session: sessionId } : {...u });
        data = JSON.stringify(data);
        fs.writeFileSync('./Data/users.json', data);
        res.json({
            status: 'login-ok',
            user: { email: user.email, color: user.color, role: user.role, id: user.id },
            message: ['Login is ok', 'ok'],
        });
    } else {
        res.json({
            message: ['Invalid login', 'error'],
        });
    }
});

app.post('/logout/:id', (req, res) => {

    const cookie = req.cookies.siteSession;
    res.cookie('siteSession', '', { maxAge: 0 });
    if (cookie) {
        let data = fs.readFileSync('./Data/users.json', 'utf8');
        data = JSON.parse(data);
        data = data.map(u => (u.id == req.params.id && u.session === cookie) ? {...u, session: '' } : {...u });
        data = JSON.stringify(data);
        fs.writeFileSync('./Data/users.json', data);
    }
    res.json({
        status: 'logout-ok',
        message: ['Logout is ok', 'ok'],
    });
});


// PAGES


app.get('/admin', (_, res) => {
    let data = fs.readFileSync('./Data/admin.json', 'utf8');
    data = JSON.parse(data);

    res.json({
        status: 'ok',
        data
    });
});



app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});