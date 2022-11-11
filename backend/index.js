const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');
const { requestLogger } = require('./utils');
const config = require('./config');

const connectDB = async (config) => {
    let retries = 2;

    while (retries) {    
        try {
            await mongoose.connect(config.URL);
            console.log('connection successful!');
            break;
        } catch (e) {
            console.log('connection failed -', e.message);
            retries = retries - 1;
        }
    }
}

connectDB(config);

const PORT = process.env.PORT || 3001;
const MSG = `running on localhost:${PORT}`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/tasks', router);

app.use(express.static('build'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'), function(err) {
       if (err) {
          res.status(500).send(err)
       }
    })
})

app.listen(PORT, () => console.log(MSG));