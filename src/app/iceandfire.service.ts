import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http'; //To fetch the detail from API Http called
import { Observable } from "rxjs"; //observable used to fetch asynchronous details

import {Router, ActivatedRoute, RouterModule,Params} from '@angular/router' //to route

import {map,catchError, tap} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class IceandfireService {

 

 

  constructor(private _http:HttpClient, router:Router, route:ActivatedRoute) {

   }

   //Handle error
   private handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  //method implemented to get the details from API 
  public getBooks():Observable<any> {

    return this._http.get('https://www.anapioficeandfire.com/api/books')
  }

  public getBookDetails(currentId) {
   
    return this._http.get('https://www.anapioficeandfire.com/api/books/'+ currentId )
  }

  public getCharacters():Observable<any>{
    return this._http.get('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50')
  }

  public getHouses():Observable<any> {
    return this._http.get('https://www.anapioficeandfire.com/api/houses')
  }

  public getCharacterDetails(Id) {
   
    return this._http.get('https://www.anapioficeandfire.com/api/characters/'+ Id )
  }

  public getHouseDetails(ID) {
    return this._http.get('https://www.anapioficeandfire.com/api/houses/' +ID);
  }

}




