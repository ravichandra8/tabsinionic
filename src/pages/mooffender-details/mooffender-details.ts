import { Component,OnInit } from '@angular/core';
import { IonicPage,NavController , NavParams } from 'ionic-angular';
import {Post} from '../moofenderslist/post';
/**
 * Generated class for the MooffenderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mooffender-details',
  templateUrl: 'mooffender-details.html',
})
export class MooffenderDetailsPage implements OnInit {
  innerdata:Post;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    console.log("constructor");
  }
  ionViewDidLoad() {
    console.log("view did load"+this.navParams.data);
  // this.innerdata=this.navParams.data;
  // this use (?) operator

  }
  ngOnInit(){
      console.log("oninit"+this.navParams.data);
    this.innerdata=this.navParams.data;

  }

  popView(){
this.navCtrl.pop();
     }


}
