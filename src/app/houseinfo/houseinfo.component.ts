import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'; //To route 

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http'; // to fetch the request from API

import { IceandfireService } from '../iceandfire.service';
import { ToastrService } from 'ngx-toastr'; //Toaster service was called

@Component({
  selector: 'app-houseinfo',
  templateUrl: './houseinfo.component.html',
  styleUrls: ['./houseinfo.component.css']
})
export class HouseinfoComponent implements OnInit {

  public house;

  constructor(private _route:Router, private route:ActivatedRoute, private service:IceandfireService,private toastrService:ToastrService) {
    this._route.routeReuseStrategy.shouldReuseRoute = () => false;
   }

   //method called to display the single house information 
  ngOnInit() {
    let ID=this.route.snapshot.paramMap.get('id')
    console.log(ID);
    this.service.getHouseDetails(ID).subscribe(
      
      data=> {
      console.log(data);
      this.house =data;
      console.log(this.house);
      
  })
  //Handle error 
  error => {
    console.log("some error occured")
    
    console.log(error.errorMessage)
    this.toastrService.error("OOPS !! Some error occured")
  
  }
  }

}
