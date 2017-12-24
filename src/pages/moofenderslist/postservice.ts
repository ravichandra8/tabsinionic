import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Post} from './post';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class PostService {
   i:number;
  constructor(private _http: Http){

  }

  getPostResponse(i): Observable<Post[]> {
    this.i=i;
    console.log(this.i);
    var header = new Headers();
    header.append('Content-type', 'application/json');
let body = {"request":{"AccessId":"1",
"mobile_no":"9999988888",
"Zone":"","Division":"",
"PoliceStation":"",
"PageNo":i,
"RowspPage":"5",
"Name":""}};
        return this._http.post('http://220.225.38.123:8081//LogicShore.svc/GetMObasedonRoleByPage', JSON.stringify(body), {
        headers:header
      }).map((response:Response) => response.json());
	}
}
