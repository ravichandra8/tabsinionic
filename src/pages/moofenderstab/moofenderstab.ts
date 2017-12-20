import { Component } from '@angular/core';
import {MoofendersvisitingPage} from '../moofendersvisiting/moofendersvisiting';
import {MoofenderslistPage} from '../moofenderslist/moofenderslist';

/**
 * Generated class for the MoofenderstabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moofenderstab',
  templateUrl: 'moofenderstab.html',
})
export class MoofenderstabPage {
   tab1=MoofenderslistPage;
   tab2=MoofendersvisitingPage;



}
