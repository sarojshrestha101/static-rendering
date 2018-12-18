const path = require('path');

const express = require('express');
const routes = express.Router();

routes.get(
    '/',(req, res, next)=>{
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    }
);

module.exports = routes;