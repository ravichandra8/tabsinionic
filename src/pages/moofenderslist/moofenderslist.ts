import { Component, OnInit } from '@angular/core';

import {PostService} from './postservice';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Post} from './post';
import {MooffenderDetailsPage} from '../mooffender-details/mooffender-details';

/**
 * Generated class for the MoofenderslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moofenderslist',
  templateUrl: 'moofenderslist.html',
  providers:[PostService]
})
export class MoofenderslistPage implements OnInit{
  data:any;
 ZonesData:any[];
 noofpages:number;
 mooffenderdeatils=MooffenderDetailsPage;
 i=1;
  constructor(private _postService: PostService) {
    console.log(this.i);
  }

  ngOnInit(){
    this._postService.getPostResponse(this.i).subscribe(posts => {
       console.log("noinit");
       console.log(posts);
       //this.ZonesData=posts;
         this.data = posts;
         this.ZonesData=this.data.MOmainList;
         this.noofpages=this.data.NoOfPages;

     });

  }
 //  doInfinite(infiniteScroll) {
 //    this._postService.getPostResponse(this.i).subscribe(posts => {
 //       console.log("test");
 //       console.log(posts);
 //       this.ZonesData=posts;
 // infiniteScroll.complete();
 //     });



     doInfinite(infiniteScroll) {
  this.i = this.i+1;
  console.log("this value"+this.i);
  setTimeout(() => {

    this._postService.getPostResponse(this.i).subscribe(posts => {
       console.log("test");
       console.log(posts);
 this.data = posts;
       for(let j=0; j<this.data.MOmainList.length; j++) {
             this.ZonesData.push(this.data.MOmainList[j]);
           }




     });
    console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 500);
}


}
