const express = require('express');
const app = express();
const cors = require('cors');
const port = 3003;

app.use(cors());

app.get('/', (req, res) => {
  res.send(`<h1>${req.query.hello}, ${req.query.who} !</h1>`);
});

app.get('/animal/:a', (req, res) => {
    // res.send(`<h1>Hello, ${req.params.a} !</h1>`);

    res.json({text: req.params.a});

});





app.listen(port, () => {
  console.log(`S3 server on port ${port}`);
});