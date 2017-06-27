import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { Signup } from '../../pages/signup/signup';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Signin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class Signin {

  posts:any;
  username:any;
  password:any;
  //facebookConnectPlugin: any;
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public http:Http
  ) {

  }
  
  Login(){         
       /*this.facebookConnectPlugin.login(['email'],function(response){
       alert("login successful");
       console.log(response.AuthResponse);
       },function(error){
        alert(error);
       })*/
       this.navCtrl.push(HomePage);
      /*this.http.post('http://localhost:9999/login',
      {'username':this.username,'password':this.password}).map(res => res.json()).subscribe(
        data => {
            if(data.status=="error"){
              this.posts = data;
              console.log(this.posts);
              alert("invalid Username/password")
            }
            else{
                 console.log(this.posts);
                 this.navCtrl.push(Category);
            }            
        },
        err => {
            alert("Invalid username/password")
            console.log("Oops!");
        }
      );*/
       
  }
  
  signup(){
    this.navCtrl.push(Signup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signin');
  }

}
