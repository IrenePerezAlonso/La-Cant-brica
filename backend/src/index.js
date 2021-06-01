const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 2021;

const authRoutes = require('./routes/auth.routes');

mongoose.connect(
    process.env.DDBB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));


server.use('/api/products', authRoutes);

server.listen(port, 
    () => debug(`Server is running in ${chalk.yellow(`localhost:${port}`)}`));