module.exports.appuserList = function(req,res){
	var query = new Parse.Query('user');
		query.equalTo("type", "appuser");
			query.find({
			  success: function(user) {
			    //res.send(results);
          res.json({status:"success",message:"successfully",data:user});
			  },

			  error: function(error) {
			    res.send(error);
			  }
	});
	
}; 	


//add appuser
module.exports.addAppuser =function(req, res){
    var user = Parse.Object.extend("user");
    var user = new user();    
    user.set("firstname", req.body.firstname);
    user.set("lastname", req.body.lastname);
    user.set("username", req.body.username);
    user.set("email", req.body.email);
    user.set("password", req.body.password);
    user.set("phone", req.body.phone);   
    user.set("type", "appuser");
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

                    
}

//get data by id
module.exports.getByid =function(req, res) {
var uid = req.params.id;
//console.log(uid);
var user = Parse.Object.extend("user");
var query = new Parse.Query(user);
query.get(uid, {
  success: function(user) {
    console.log(user);    
    //res.send(user);
    res.json({status:"success",message:"successfully",data:user})
  },
  error: function(object, error) {
     //console.log(error);
      res.send(error);
  }
 });
};



//Update data
module.exports.update = function(req, res){
    var uid = req.params.id;
    var user = Parse.Object.extend("user");
    var query = new Parse.Query(user);
    //console.log(uid);
    query.get(uid, {
        success: function (user) {
            //console.log(req.body);
            user.set("firstname",req.body.firstname);
            user.set("lastname",req.body.lastname);
            user.set("username",req.body.username);
            user.set("emailaddress",req.body.email);
            user.set("password",req.body.password);
            user.set("phone",req.body.phone);            
            user.save();
            //res.send(user);
            res.json({status:"success",message:"successfully",data:user});
        },
        error: function (error) {
            //console.log(error);
            res.send(error);
        }
    });
};



//delete single record
module.exports.delete = function(req, res) {
var uid = req.params.id;
console.log(uid);
var user = Parse.Object.extend("user");
var query = new Parse.Query(user);
query.get(uid, {
  success: function(user) {
    user.destroy({});
    console.log(user);    
    //res.send(user);
    res.json({status:"success",message:"successfully",data:user}) 
  },
  error: function(object, error) {
     //console.log(error);
      res.send(error);
  }
 });
};


