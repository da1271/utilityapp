var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config({path: '.env'});
var config = require('./config');
var persOrder = require('./controllers/persOrder');
var searchDataList = require('./controllers/searchDataList');
var user = require('./controllers/user');

mongoose.Promise = global.Promise;

var  port =  process.env.SECURITY_PORT;

mongoose.connect(process.env.MONGO_HOST, {
    // useMongoClient: true
  },
  function(err) {
    if (err) {
      console.log("Error on Database connection - " + err);
    }
  });


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('body-parser').json({ type: 'application/*+json' }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/*+json')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// basic routes

app.get('/', function(req, res) {
    res.send(`API is running at http://${ process.env.SECURITY_HOST }:` + port + '/api');
});

// app.post('/register', user.signup);

// express router
var apiRoutes = express.Router();

app.use('/api', apiRoutes);

apiRoutes.post('/register', user.signup); // API returns all access details of all given group name

apiRoutes.post('/login', user.login);
//
// apiRoutes.post('/authorization', user.authorization);
//
// apiRoutes.use(user.authenticate); // route middleware to authenticate and check token
//
// // authenticated routes
// apiRoutes.get('/', function(req, res) {
//     res.status(201).json({ message: 'Welcome to the authenticated routes!' });
// });
//

apiRoutes.post('/addSku', searchDataList.addSku); // API returns all access details of all given group name
apiRoutes.post('/addSkuDescription', searchDataList.addSkuDescription); // API returns all access details of all given group name
apiRoutes.post('/addCurrency', searchDataList.addCurrency); // API returns all access details of all given group name
apiRoutes.post('/addCountry', searchDataList.addCountry); // API returns all access details of all given group name
apiRoutes.post('/addCommodity', searchDataList.addCommodity); // API returns all access details of all given group name
apiRoutes.post('/addLabelType', searchDataList.addLabelType); // API returns all access details of all given group name
apiRoutes.post('/addSource', searchDataList.addSource); // API returns all access details of all given group name
apiRoutes.post('/addDestination', searchDataList.addDestination); // API returns all access details of all given group name
apiRoutes.post('/addProductFragrance', searchDataList.addProductFragrance); // API returns all access details of all given group name
apiRoutes.post('/addProductForm', searchDataList.addProductForm); // API returns all access details of all given group name
apiRoutes.post('/addOrderSize', searchDataList.addOrderSize); // API returns all access details of all given group name
apiRoutes.post('/addOrderStatus', searchDataList.addOrderStatus); // API returns all access details of all given group name
apiRoutes.post('/addDeliveryAgent', searchDataList.addDeliveryAgent); // API returns all access details of all given group name
apiRoutes.post('/addDeliveryMethod', searchDataList.addDeliveryMethod); // API returns all access details of all given group name
apiRoutes.post('/addRejectedReasonCode', searchDataList.addRejectedReasonCode); // API returns all access details of all given group name
apiRoutes.post('/addRejectedReasonDesc', searchDataList.addRejectedReasonDesc); // API returns all access details of all given group name

apiRoutes.get('/getSku', searchDataList.getSku); // API returns all access details of all given group name
apiRoutes.get('/getSkuDescription', searchDataList.getSkuDescription); // API returns all access details of all given group name
apiRoutes.get('/getCurrency', searchDataList.getCurrency); // API returns all access details of all given group name
apiRoutes.get('/getCountry', searchDataList.getCountry); // API returns all access details of all given group name
apiRoutes.get('/getCommodity', searchDataList.getCommodity); // API returns all access details of all given group name
apiRoutes.get('/getLabelType', searchDataList.getLabelType); // API returns all access details of all given group name
apiRoutes.get('/getSource', searchDataList.getSource); // API returns all access details of all given group name
apiRoutes.get('/getDestination', searchDataList.getDestination); // API returns all access details of all given group name
apiRoutes.get('/getOrderSize', searchDataList.getOrderSize); // API returns all access details of all given group name
apiRoutes.get('/getOrderStatus', searchDataList.getOrderStatus); // API returns all access details of all given group name
apiRoutes.get('/getDeliveryAgent', searchDataList.getDeliveryAgent); // API returns all access details of all given group name
apiRoutes.get('/getDeliveryMethod', searchDataList.getDeliveryMethod); // API returns all access details of all given group name
apiRoutes.get('/getRejectedReasonCode', searchDataList.getRejectedReasonCode); // API returns all access details of all given group name
apiRoutes.get('/getRejectedReasonDesc', searchDataList.getRejectedReasonDesc); // API returns all access details of all given group name
apiRoutes.get('/getProductForm', searchDataList.getProductForm); // API returns all access details of all given group name
apiRoutes.get('/getProductFragrance', searchDataList.getProductFragrance); // API returns all access details of all given group name

apiRoutes.post('/removeSku', searchDataList.removeSku);
apiRoutes.post('/removeSkuDesc', searchDataList.removeSkuDesc);
apiRoutes.post('/removeCurrency', searchDataList.removeCurrency);
apiRoutes.post('/removeCountry', searchDataList.removeCountry);
apiRoutes.post('/removeCommodity', searchDataList.removeCommodity);
apiRoutes.post('/removeLabelType', searchDataList.removeLabelType);
apiRoutes.post('/removeSource', searchDataList.removeSource);
apiRoutes.post('/removeDestination', searchDataList.removeDestination);
apiRoutes.post('/removeProductForm', searchDataList.removeProductForm);
apiRoutes.post('/removeProductFragrance', searchDataList.removeProductFragrance);
apiRoutes.post('/removeOrderSize', searchDataList.removeOrderSize);
apiRoutes.post('/removeOrderStatus', searchDataList.removeOrderStatus);
apiRoutes.post('/removeDeliveryAgent', searchDataList.removeDeliveryAgent);
apiRoutes.post('/removeDeliveryMethod', searchDataList.removeDeliveryMethod);
apiRoutes.post('/removeRejectedReasonCode', searchDataList.removeRejectedReasonCode);
apiRoutes.post('/removeRejectedReasonDesc', searchDataList.removeRejectedReasonDesc);


apiRoutes.post('/updateSku', searchDataList.updateSku);
apiRoutes.post('/updateSkuDesc', searchDataList.updateSkuDesc);
apiRoutes.post('/updateCurrency', searchDataList.updateCurrency);
apiRoutes.post('/updateCountry', searchDataList.updateCountry);
apiRoutes.post('/updateCommodity', searchDataList.updateCommodity);
apiRoutes.post('/updateLabelType', searchDataList.updateLabelType);
apiRoutes.post('/updateSource', searchDataList.updateSource);
apiRoutes.post('/updateDestination', searchDataList.updateDestination);
apiRoutes.post('/updateProductForm', searchDataList.updateProductForm);
apiRoutes.post('/updateProductFragrance', searchDataList.updateProductFragrance);
apiRoutes.post('/updateOrderSize', searchDataList.updateOrderSize);
apiRoutes.post('/updateOrderStatus', searchDataList.updateOrderStatus);
apiRoutes.post('/updateDeliveryAgent', searchDataList.updateDeliveryAgent);
apiRoutes.post('/updateDeliveryMethod', searchDataList.updateDeliveryMethod);
apiRoutes.post('/updateRejectReasonCode', searchDataList.updateRejectReasonCode);
apiRoutes.post('/persOrderQuery', searchDataList.persOrderQuery);



// kick off the server
app.listen(port, function(){
    console.log('Listening on port ' + port); //Listening on port 8888
});
