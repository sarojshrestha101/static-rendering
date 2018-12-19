const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();//using express
app.use(bodyParser.urlencoded());//using body parser

// seting view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
 
//static contant
app.use(express.static(path.join(__dirname, 'public')));

//importing routes
const indexRoute = require('./routes/index');
const page1Route = require('./routes/page1');
const page2Route = require('./routes/page2');
const page3Route = require('./routes/page3');

//using routes
app.use(indexRoute);
app.use(page1Route);
app.use(page2Route);
app.use(page3Route);

//404
app.use(
    (req,res,next)=>{
        res.status(404).render('404', {
            pageTitle: '404 page not found!'
        })
    }
);

app.listen(2000);