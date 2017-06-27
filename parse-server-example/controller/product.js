module.exports.productList = function(req,res){
	var query = new Parse.Query('product');		
			query.find({
			  success: function(product) {
			    //res.send(results);
          res.json({status:"success",message:"successfully",data:product});
			  },

			  error: function(error) {
			    res.send(error);
			  }
	});
	
}; 	

module.exports.productByBrand = function(req,res){
  var bid = req.params.id;
  console.log(bid+"string");
  var query = new Parse.Query('product');   
      query.equalTo("brandId", bid);
      query.find({
        success: function(product) {
          //res.send(results);
          res.json({status:"success",message:"successfully",data:product});
        },

        error: function(error) {
          res.send(error);
        }
  });
  
}; 


module.exports.getProduct_Bycat = function(req,res){
  var cid = req.params.id;
  console.log(cid+"string");
  var query = new Parse.Query('product');   
      query.equalTo("category", cid);
      query.find({
        success: function(product) {
          //res.send(results);
          res.json({status:"success",message:"successfully",data:product});
        },

        error: function(error) {
          res.send(error);
        }
  });
  
};  

module.exports.getProduct_byId =function(req, res) {
var uid = req.params.id;
console.log(uid);
var product = Parse.Object.extend("product");
var query = new Parse.Query(product);
query.get(uid, {
  success: function(product) {
    console.log(product);    
    res.json({status:"success",message:"successfully",data:product});
  },
  error: function(object, error) {
     console.log(error);
      res.send(error);
  }
 });
};



//add product
module.exports.addProduct =function(req, res){ 
  console.log(req.body);
    var c = req.files.imageFile;
      var name = [];
        var path = [];
           for(var i=0; i<c.length;i++){
            name.push(c[i].originalFilename);
            path.push(c[i].path);
           }
             var Product = Parse.Object.extend("product");
                  var product = new Product();    
                  product.set("name", req.body.name);
                  product.set("sku", req.body.sku);
                  product.set("price", req.body.price);
                  product.set("category", req.body.category);
                  product.set("size", req.body.size);
                  product.set("weight", req.body.weight);                           
                  product.set("stock", req.body.stock);
                  product.set("offer", req.body.offer);
                  product.set("description", req.body.description);                                                       
                  product.set("Mdate", req.body.Mdate);
                  product.set("Edate", req.body.Edate);
                  product.set("brandId", req.body.brandId);
                  product.set("images", name);
                  product.set("path",path)  
                  product.save(null, {
                       success: function(result) {
                           //console.log(result);
                           res.json({status:"success",message:"successfully",data:result})    
                           //res.send(user);
                       },
                       error: function(result, error) {    
                              console.log(error);
                              res.send(error);
                       }
                    });
      

};

//Update data
module.exports.updateProduct = function(req, res){
    var uid = req.params.id;
    var d;
    var c = req.files.imageFile;
      if(req.files.imageFile == undefined){
         var product = Parse.Object.extend("product");
                var query = new Parse.Query(product);                          
                query.get(uid, {
                    success: function (product) {
                        //console.log(req.body);
                        product.set("name", req.body.name);
                        product.set("sku", req.body.sku);
                        product.set("price", req.body.price);
                        product.set("category", req.body.category);
                        product.set("size", req.body.size);
                        product.set("weight", req.body.weight);                           
                        product.set("stock", req.body.stock);
                        product.set("offer", req.body.offer);
                        product.set("description", req.body.description);                                                       
                        product.set("Mdate", req.body.Mdate);
                        product.set("Edate", req.body.Edate);    
                        product.save();
                        console.log(product);
                        res.json({status:"success",message:"successfully",data:product});
                    },
                    error: function (error) {
                        console.log(error);
                        res.send(error);
                    }
                });
      }else{
        
      var name = [];
        var path = [];
           for(var i=0; i<c.length;i++){
            name.push(c[i].originalFilename);
            path.push(c[i].path);
           }      
              var product = Parse.Object.extend("product");
              var query = new Parse.Query(product);                          
              query.get(uid, {
                  success: function (product) {
                      //console.log(req.body);
                      product.set("name", req.body.name);
                      product.set("sku", req.body.sku);
                      product.set("price", req.body.price);
                      product.set("category", req.body.category);
                      product.set("size", req.body.size);
                      product.set("weight", req.body.weight);                           
                      product.set("stock", req.body.stock);
                      product.set("offer", req.body.offer);
                      product.set("description", req.body.description);                                                       
                      product.set("Mdate", req.body.Mdate);
                      product.set("Edate", req.body.Edate);                                                       
                      product.set("images", name);
                      product.set("path",path)      
                      product.save();
                      console.log(product);
                      res.json({status:"success",message:"successfully",data:product});
                  },
                  error: function (error) {
                      console.log(error);
                      res.send(error);
                  }
              });
    }
  };
    



//delete single record
module.exports.deleteProduct = function(req, res) {
var uid = req.params.id;
console.log(uid+"delete");
var product = Parse.Object.extend("product");
var query = new Parse.Query(product);
query.get(uid, {
  success: function(result) {
    result.destroy({});
    console.log(result);    
    //res.send(user);
    res.json({status:"success",message:"successfully",data:result}) 
  },
  error: function(object, error) {
     console.log(error);
      res.send(error);
  }
 });
};

