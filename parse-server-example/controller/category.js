module.exports.category=function(req, res) {
var query = new Parse.Query('category');
query.find({
  success: function(result) {
    //console.log(result)
    res.json({status:"success",message:"successfully",data:result})
  },

  error: function(error) {
    res.json({status:"error",message:"wrong",data:result})
  }
});
};

//add appuser
module.exports.addCategory =function(req, res){
 var d;
  var c = req.files.imageFile.path;
     d= "http://localhost:9999/"+c;     
     var user = Parse.Object.extend("category");
     var user = new user();    
      user.set("name", req.body.name);                           
      user.set("path", d);                                                 
      user.save(null, {
           success: function(result) {
               //console.log(result);
               res.json({status:"success",message:"successfully",data:result})    
               //res.send(user);
           },
           error: function(user, error) {    
                  console.log(error);
                  res.send(error);
           }
        }); 
   
}

//get data by id
module.exports.getByidCategory =function(req, res) {
var uid = req.params.id;

var user = Parse.Object.extend("category");
var query = new Parse.Query(user);
query.get(uid, {
  success: function(result) {   
    res.json({status:"success",message:"successfully",data:result})
  },
  error: function(object, error) {     
      res.send(error);
  }
 });
};



//Update data
module.exports.editCategory =function(req, res){  
  var uid = req.params.id;
  var d;
  if(req.files.imageFile == undefined){
     var category = Parse.Object.extend("category");
     var query = new Parse.Query(category);
     //console.log(uid);
      query.get(uid, {
          success: function (user) {
              console.log(req.body);
              user.set("name", req.body.name);                      
              user.save();                                      
              res.json({status:"success",message:"successfully",data:user});                                      
          },
          error: function (error) {
              //console.log(error);
              res.send(error);
          }
       });
  }else{
        var c = req.files.imageFile.path;           
        d= "http://localhost:9999/"+c;         
        var category = Parse.Object.extend("category");
        var query = new Parse.Query(category);
        //console.log(uid);
          query.get(uid, {
              success: function (user) {
                  console.log(req.body);
                  user.set("name", req.body.name);           
                  user.set("path", d);             
                  user.save();                                      
                  res.json({status:"success",message:"successfully",data:user});                                      
              },
              error: function (error) {
                  //console.log(error);
                  res.send(error);
              }
           });
  }
  
};



//delete single record
module.exports.deleteCat = function(req, res) {
var uid = req.params.id;
console.log(uid);
var Category = Parse.Object.extend("category");
var query = new Parse.Query(Category);
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


 