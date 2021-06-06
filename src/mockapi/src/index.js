import express from 'express';
import http from 'http';
import https from 'https';
import initialData from './data/initialData.json'

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 8080;
const port2 = 8081;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT");
    next();
})
app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('/api/v1/getInitialData', (req, res) => {
    setTimeout(() => {
        res.send(initialData);
    }, 100)
})

const httpsServer = https.createServer(app);
httpsServer.listen(port, () => {
    console.log("Listen on port ", port);
})

const httpServer = http.createServer(app);
httpServer.listen(port2, () => {
    console.log("Listen on port ", port2);
})
