import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router'; //To route 

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http'; // to fetch the request from API

import { IceandfireService } from '../iceandfire.service'; //service file injected
import { ToastrService } from 'ngx-toastr'; //toaster service was called



@Component({
  selector: 'app-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrls: ['./detailedview.component.css']
})
export class DetailedviewComponent implements OnInit {

      bookUrl;
      book;
      
  constructor(private _route:Router, private route:ActivatedRoute, private service:IceandfireService,private toastrService:ToastrService) {
    this._route.routeReuseStrategy.shouldReuseRoute = () => false;

   }

  
  ngOnInit() {
    
    //method called to get single book information 
    let id=this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.service.getBookDetails(id).subscribe(
      
      data=> {
      console.log(data);
      this.book =data;
      console.log(this.book);
      
  })
  //handle error
  error => {
    console.log("some error occured")
    
    console.log(error.errorMessage)
    this.toastrService.error("OOPS !! Some error occured")
  
  }
       
       
        }
        
      
    

   

    


    
    }
  
