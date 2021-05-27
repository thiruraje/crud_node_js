
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route 
const createRouter = require('./routes/create-route');
var readRouter = require('./routes/read-route');
var updateRouter = require('./routes/update-route');
var deleteRouter = require('./routes/delete-route');


app.use('/crud', createRouter);
app.use('/crud', readRouter);
app.use('/crud', updateRouter);
app.use('/crud', deleteRouter);



app.get('/',function (req, res) {
res.render('home')
});

app.listen(8000, function () {
  console.log('Listening to Port 8000');
});