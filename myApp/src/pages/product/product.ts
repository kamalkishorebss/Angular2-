import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessdetailPage } from '../../pages/businessdetail/businessdetail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  parameter1:any; 
  path:any;
  firstImg:any;
  product:any;
  

    constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http
             ) { 
                 
                 this.parameter1 = navParams.get('param1');  
                 var out =[];               
                 this.http.get('http://localhost:9999/getProductbyId/'+this.parameter1).map(res =>  
                    res.json()).subscribe(data => {
                    var res = data.data;                                        
    				        Object.keys(res).forEach( key => {                   
    				             out.push(res[key]);
    				        });
    			            this.path =out[1];
    			            console.log(this.path);
    			            this.firstImg =out[1][0];
    			            this.product=res;		                
    		                console.log(this.product);
    	                },
				         err => {
				           console.log("Oops!");
				         }
			        );
    }
  back(){
       this.navCtrl.push(BusinessdetailPage);          
       
  }
	ionViewDidLoad() {
	    console.log('ionViewDidLoad ProductPage');
	}

}
