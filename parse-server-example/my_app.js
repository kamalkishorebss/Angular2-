var express = require('express');
var bodyParser = require('body-parser');
var ParseServer = require('parse-server').ParseServer;
var Parse = require('parse/node').Parse;
Parse.initialize('gooffrr','javascript_key' ,'gooffrr123');
Parse.serverURL = 'http://localhost:9999/parse';
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty({ uploadDir: './public/productImage/' });
var multiMiddleware = multiparty({ uploadDir: './public/category/' });
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('express-formidable');

var authController = require("./controller/auth");
var businessController = require("./controller/businessuser");
var appuserController = require("./controller/appuser");
var brandController = require("./controller/brand");
var productController = require("./controller/product");
var categoryController = require("./controller/category");

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
databaseURI: databaseUri || 'mongodb://localhost:27017/gooffrr',
cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
appId: process.env.APP_ID || 'gooffrr',
masterKey: process.env.MASTER_KEY || 'gooffrr123', //Add your master key here. Keep it secret!
serverURL: process.env.SERVER_URL || 'http://localhost:9999/parse', // Don't forget to change to https if needed

liveQuery: {
classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
}
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, './public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);
var port = process.env.PORT || 9999;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
console.log('parse-server-example running on port ' + port + '.');
}); 
//fetch the game score from mongo
app.get('/users', function(req, res) {
var query = new Parse.Query('user');
query.find({
  success: function(user) {
    res.send(user);
  },

  error: function(error) {
    res.send(error);
  }
});
});

//*****API URLs
app.post('/login',authController.log);
app.get('/appuser',appuserController.appuserList);
app.post('/adduser' ,appuserController.addAppuser);
app.get('/getByid/:id',appuserController.getByid);
app.post('/update/:id',appuserController.update);
app.get('/delete/:id',appuserController.delete);

app.post('/businesUser',businessController.addBusinesUuser);
app.post('/editbusiness_user/:id',businessController.update_Business_user);
app.get('/business_userList',businessController.businessuser_list);

app.get('/brand_list',brandController.brandList);
app.post('/add_brand', brandController.addBrand);
app.get('/getByBrand/:id',brandController.getByBrand);
app.post('/updatebrand/:id',brandController.updateBrand);
app.get('/remove/:id',brandController.remove);
app.post('/addBrandcategory', brandController.addBrand_Category);
app.get('/categorybrand_List',brandController.category_List);
app.delete('/removeBrandcategory/:id',brandController.removeCategory);

app.get('/productlist',productController.productList);
app.get('/productBy_Brand/:id',productController.productByBrand);
app.post('/addproduct',multipartyMiddleware ,productController.addProduct);
app.get('/delete_Product/:id',productController.deleteProduct);
app.post('/update_Product/:id',multipartyMiddleware, productController.updateProduct);
app.get('/getProductbyId/:id',productController.getProduct_byId);
app.get('/getProductByCat/:id',productController.getProduct_Bycat);

app.post('/addcategory', multiMiddleware, categoryController.addCategory);
app.get('/allcategory', categoryController.category);
app.get('/category_delete/:id',categoryController.deleteCat);
app.post('/updatecategory/:id', multiMiddleware,categoryController.editCategory);
app.get('/getByidCategory/:id',categoryController.getByidCategory);

