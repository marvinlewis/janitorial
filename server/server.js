const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const quoteRouter = require('./data/quoteRouter');
const loginRouter = require('./data/loginRouter');

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/freequote', quoteRouter);
server.use('/api/login', loginRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: '==!! SERVER GET !!=='
    })
})

module.exports = server;