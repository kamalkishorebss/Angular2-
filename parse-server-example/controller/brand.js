module.exports.brandList = function(req,res){
	var query = new Parse.Query('brand');
    query.find({
      success: function(user) {
       //res.send(user);
       res.json({status:"success",message:"successfully",data:user});
      },

      error: function(error) {
       res.send(error);
      }
    });	
};

//add appuser
module.exports.addBrand =function(req, res){ 
  var multiparty = require('multiparty');
            var fs = require('fs');
            var form = new multiparty.Form();
            form.parse(req, (err, fields, files) => {                                    
                 var uploadDir = "./public/brandimage/";                              
                 var imgArr = [];               
                 var {path: tempPath, originalFilename} = files.imageFile[0];
                 var copyToPath =uploadDir + originalFilename;
                 console.log(copyToPath);
                 fs.readFile(tempPath, function (err, data) {                                     
                      var buf= new Buffer(data);
                      fs.writeFile(copyToPath, buf, function (err, data) {                         
                           var imgObj = {};
                           imgObj['name'] = originalFilename;                            
                           imgObj['path'] = uploadDir+originalFilename;
                            var user = Parse.Object.extend("brand");
                            var user = new user();    
                            user.set("name", fields.name[0]);                                                                            
                            user.set("file", imgObj['name'].toString()); 
                           
                            user.save(null, {
                                 success: function(user) {
                                     console.log(user);
                                     res.json({status:"success",message:"successfully",data:user})    
                                     //res.send(user);
                                 },
                                 error: function(user, error) {    
                                        console.log(error);
                                        res.send(error);
                                 }
                              }); 

                      });
                  });    
               });     

};


//get data by id
module.exports.getByBrand =function(req, res) {
var uid = req.params.id;
console.log(uid);
var brand = Parse.Object.extend("brand");
var query = new Parse.Query(brand);
query.get(uid, {
  success: function(user) {
    console.log(user);    
    res.json({status:"success",message:"successfully",data:user});
  },
  error: function(object, error) {
     console.log(error);
      res.send(error);
  }
 });
};



//Update data
module.exports.updateBrand = function(req, res){
  var uid = req.params.id;
  var multiparty = require('multiparty');
            var fs = require('fs');
            var form = new multiparty.Form();
            form.parse(req, (err, fields, files) => { 
                 if(files.imageFile==undefined){
                    var brand = Parse.Object.extend("brand");
                    var query = new Parse.Query(brand);
                    //console.log(uid);
                    query.get(uid, {
                        success: function (user) {
                            console.log(req.body);
                            user.set("name", fields.name[0]);        
                                         
                            user.save();                                      
                            res.json({status:"success",message:"successfully",data:user});                                      
                        },
                        error: function (error) {
                            //console.log(error);
                            res.send(error);
                        }
                    });
                 }else{                    
                 var uploadDir = "./public/brandimage/";                              
                 var imgArr = [];               
                 var {path: tempPath, originalFilename} = files.imageFile[0];
                 var copyToPath =uploadDir + originalFilename;
                 console.log(copyToPath);
                 fs.readFile(tempPath, function (err, data) {                                     
                      var buf= new Buffer(data);
                      fs.writeFile(copyToPath, buf, function (err, data) {                         
                           var imgObj = {};
                           imgObj['name'] = originalFilename;                            
                           imgObj['path'] = uploadDir+originalFilename;   
                              var brand = Parse.Object.extend("brand");
                              var query = new Parse.Query(brand);
                              //console.log(uid);
                              query.get(uid, {
                                  success: function (user) {
                                      console.log(req.body);
                                      user.set("name", fields.name[0]);                                                                                             
                                      user.set("file", imgObj['name'].toString());             
                                      user.save();                                      
                                      res.json({status:"success",message:"successfully",data:user});                                      
                                  },
                                  error: function (error) {
                                      //console.log(error);
                                      res.send(error);
                                  }
                              });
                          });    
                    });
               }
        }); 
};



//delete single record
module.exports.remove = function(req, res) {
var uid = req.params.id;
console.log(uid);
var brand = Parse.Object.extend("brand");
var query = new Parse.Query(brand);
query.get(uid, {
  success: function(user) {
    user.destroy({});
    console.log(brand);    
    res.json({status:"success",message:"successfully",data:user});
  },
  error: function(object, error) {
     console.log(error);
      res.send(error);
  }
 });
};


module.exports.addBrand_Category =function(req, res){ 
console.log(req.body);                
        var brand = Parse.Object.extend("brandcategory");
        var brand = new brand();    
        brand.set("name", req.body.name);
        brand.save(null, {
             success: function(user) {
                 console.log(user);    
                 res.json({status:"success",message:"successfully",data:user});
             },
             error: function(user, error) {    
                    console.log(error);
                    res.send(error);
             }
          });        

};


module.exports.category_List = function(req,res){
  var query = new Parse.Query('brandcategory');
    query.find({
      success: function(user) {
       //res.send(user);
       res.json({status:"success",message:"successfully",data:user});
      },

      error: function(error) {
       res.send(error);
      }
    }); 
};



module.exports.removeCategory = function(req, res) {
var uid = req.params.id;
console.log(uid);
var brand = Parse.Object.extend("brandcategory");
var query = new Parse.Query(brand);
query.get(uid, {
  success: function(user) {
    user.destroy({});
    console.log(user);    
    res.json({status:"success",message:"successfully",data:user});
  },
  error: function(user, error) {
     console.log(error);
      res.send(error);
  }
 });
};
