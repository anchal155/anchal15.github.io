import { Component, OnInit } from '@angular/core';
import {IceandfireService} from '../iceandfire.service'; //http service is called
import {Router, ActivatedRoute} from '@angular/router'; //Routing implementation

import {Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr' //Toaster service is called

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public houseArray=[];

  public allHouses=[];

  config:any;

  constructor(private router:Router, private _route:ActivatedRoute, private service:IceandfireService, private location:Location, private toastrService:ToastrService) {
    this.config = {
      currentPage:1,
      itemsPerPage:5,
      totalItem:0
    }
  }

  ngOnInit() {

    console.log("ngOnInit called");


    //To show the list of allHouses
    this.service.getHouses().subscribe(res => {

      this.houseArray = res;

      console.log(this.houseArray);

      this.allHouses=this.houseArray.map(house => ({...house, id:house.url.split("/").pop()}))

   console.log(this.allHouses); 





    },
    //To handle error
    error => {
      console.log("some error occured") 
      
      console.log(error.errorMessage)
      this.toastrService.error("OOPS !! Some error occured")
    
    })

  //implement pagination 
    
  this._route.queryParams.subscribe(
      params => this.config.currentPage= params['page']?params['page']:1 ); 
       
      for (let i = 1; i <= 100; i++) {
      this.houseArray.push(`item ${i}`);
      }
       
      
    }
      pageChange(newPage: number) {
          this.router.navigate(['/houses'], { queryParams: { page: newPage } });
        }
      
    
      }


    

