module.exports.businessuser_list = function(req,res){
	var query = new Parse.Query('user');
		query.equalTo("type", "businessuser");
			query.find({
			  success: function(user) {
			     res.json({status:"success",message:"successfully",data:user});
			  },

			  error: function(error) {
			    res.send(error);
			  }
	});
	
};

module.exports.addBusinesUuser =function(req, res){   
    var multiparty = require('multiparty');
    var fs = require('fs');
    var form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {                             
         var uploadDir = "./public/businessuser/";                              
         var imgArr = [];               
         var {path: tempPath, originalFilename} = files.imageFile[0];
         var copyToPath =uploadDir + originalFilename;
         //console.log(copyToPath);
         fs.readFile(tempPath, function (err, data) {                                     
              var buf= new Buffer(data);
              fs.writeFile(copyToPath, buf, function (err, data) {                         
                   var imgObj = {};
                   imgObj['name'] = originalFilename;                            
                   imgObj['path'] = uploadDir+originalFilename;
                    var user = Parse.Object.extend("user");
                    var user = new user();    
                    user.set("firstname", fields.firstname[0]);
                    user.set("lastname", fields.lastname[0]);
                    user.set("username", fields.username[0]);
                    user.set("email", fields.email[0]);
                    user.set("password", fields.password[0]);
                    user.set("phone",fields.phone[0]);
                    user.set("location",fields.location[0]);
                    user.set("address",fields.address[0]);
                    user.set("business",fields.business[0]);
                    user.set("file", imgObj['name'].toString());                   
                    user.set("type", "businessuser");
                    user.save(null, {
                         success: function(user) {
                             //console.log(user);
                             res.json({status:"success",message:"successfully",data:user})    
                             //res.send(user);
                         },
                         error: function(user, error) {    
                                //console.log(error);
                                res.send(error);
                         }
                      }); 

              });
          });    
       });
  	
};

module.exports.update_Business_user = function(req, res){
    var uid = req.params.id;    
     var multiparty = require('multiparty');
      var fs = require('fs');
      var form = new multiparty.Form();
      form.parse(req, (err, fields, files) => {
        //console.log(files.imageFile);
        if(files.imageFile==undefined){
          var user = Parse.Object.extend("user");
            var query = new Parse.Query(user);
            //console.log(uid);
            query.get(uid, {
                success: function (user) {
                    console.log(req.body);                               
                    user.set("firstname", fields.firstname[0]);
                    user.set("lastname", fields.lastname[0]);
                    user.set("username", fields.username[0]);
                    user.set("email", fields.email[0]);
                    user.set("password", fields.password[0]);
                    user.set("location",fields.location[0]);
                    user.set("business",fields.business[0]);
                    user.set("address",fields.address[0]);
                    user.set("phone",fields.phone[0]);                                
                    user.save();                                      
                    res.json({status:"success",message:"successfully",data:user});                                      
                },
                error: function (error) {
                    //console.log(error);
                    res.send(error);
                }
            });
        }else{
              var c = files.imageFile;
              for(var i in c){                
                var d = c[i] 
              }                                  
               var uploadDir = "./public/businessuser/";                              
               var imgArr = [];               
               var {path: tempPath, originalFilename} = d;
               var copyToPath =uploadDir + originalFilename;         
               fs.readFile(tempPath, function (err, data) {                                     
                  var buf= new Buffer(data);
                    fs.writeFile(copyToPath, buf, function (err, data) {                         
                         var imgObj = {};
                         imgObj['name'] = originalFilename;                    
                            var user = Parse.Object.extend("user");
                            var query = new Parse.Query(user);
                            //console.log(uid);
                            query.get(uid, {
                                success: function (user) {
                                    console.log(req.body);                               
                                    user.set("firstname", fields.firstname[0]);
                                    user.set("lastname", fields.lastname[0]);
                                    user.set("username", fields.username[0]);
                                    user.set("email", fields.email[0]);
                                    user.set("password", fields.password[0]);
                                    user.set("phone",fields.phone[0]);
                                    user.set("location",fields.location[0]);
                                    user.set("business",fields.business[0]);
                                    user.set("address",fields.address[0]);
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