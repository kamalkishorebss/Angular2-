module.exports.log= function(req, res) {
  var username = req.body.username;  
  console.log(typeof username);
  var password = req.body.password;  
  var User = Parse.Object.extend("user");
  var query = new Parse.Query(User);
  query.equalTo("username", username);
  query.find({
   success: function(user,err) {      
        if( user.length > 0)
        {
           for (var i = 0; i < user.length; i++) {
              var object = user[i];
              var u = object.get('username');
              var p = object.get('password');
                   console.log(u);
                   console.log(username);
                   if(u === username && p === password){
                       console.log("sucess");
                       res.send(object);
                    }
                    else{  
                         return res.json({status:'error'});                     
                         console.log("invalid crendital");                 
                         
                    }
            }
        }
        else
        { 
          return res.json({status:'error'}); 
          console.log("User does not exist.");
        }
        
      },
      error: function(error) {
        res.send(error);
      }
  }); 
};