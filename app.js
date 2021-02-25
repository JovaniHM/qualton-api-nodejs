const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/saludo', (req, res) => {
    res.send('Que onda');
})

app.post('/productoNotification', (req, res) => {
    /* console.log(req.headers);
    console.log(req.body); */
    /* console.log(req); */
    res.json({header: req.headers, body: req.body});
})

app.listen(port, () => {
    console.log(`>>> The server is ready in port: (${port})`);
    console.log(`>>> Press CTRL + c to finish the server`);
})