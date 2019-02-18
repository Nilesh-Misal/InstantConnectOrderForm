var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('./model');
var session = require('express-session');


var fs=require('fs');
//var pdf=require('html-pdf');
//var html=fs.readFileSync('/home/jampot/Documents/InstantConnect/views/requirement.ejs','utf8');
//var options = { format: 'a4' };
//var routes = require('./routes/index');
var registration=require('./routes/registration');
var customer  = require('./routes/customer');
var small_requirements=require('./routes/s_requirementes');
var medium_requirements=require('./routes/m_requirements');
var large_requirements=require('./routes/large_requirements');

var dashboard=require('./routes/dashboard');

// console.log(small_requirements);
// console.log(medium_requirements);


var app = express();

//app.set('views', path.join(__dirname, 'views'));

  app.set('views', path.join(__dirname, 'views'));
  app.engine('ejs', require('ejs').renderFile);
  app.set('view engine', 'ejs');
//app.set('view engine', 'ejs');
//app.use(expressLayouts);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({secret: 'ssshhhhh'}));


/**
 * Get port from environment and store in Express.
 */

// app.set('port', 8000);
 let port = '4300'

//app.use('/', routes);
app.use('/customer', customer);
app.use('/registration',registration);
app.use('/dashboard',dashboard);
app.use('/small_requirements',small_requirements);
app.use('/medium_requirements',medium_requirements);
app.use('/large_requirements',large_requirements);




// app.post('/requirements', function(req,res){
//   console.log(req.body);
//   var details=req.body;

//   res.render('pdf.ejs',{details:details},function(err,html){
//     pdf.create(html,options).toFile('../public/pdf/invoice.pdf',function(err,res){
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log(res);
//       }
//     });
//     res.send(html);
//   });
// });

app.get('/',(req,res)=>{
  res.render('index')
})

// app.get('/registration',(req,res)=>{
//   res.render('registration')
// })

//app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('public'));
app.use('/public',express.static('public'))

app.use('/images',express.static(__dirname + '/images'));


models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  app.listen(4400, function() {
    console.log('Express app listening on port ' + port);
  });
  app.on('error', onError);
  app.on('listening', onListening);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP app "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP app "listening" event.
 */

function onListening() {

  console.log('Listening on ' + 4300);
}

module.exports=app;
