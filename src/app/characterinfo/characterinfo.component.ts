import { Component, OnInit } from '@angular/core';
import {IceandfireService} from '../iceandfire.service'; //ervice file injected

import {Router, ActivatedRoute} from '@angular/router'; //To route



import { ToastrService } from 'ngx-toastr' //toaster service was called

@Component({
  selector: 'app-characterinfo',
  templateUrl: './characterinfo.component.html',
  styleUrls: ['./characterinfo.component.css']
})
export class CharacterinfoComponent implements OnInit {

  public character;

  constructor(private _route:Router, private route:ActivatedRoute, private service:IceandfireService,private toastrService:ToastrService) {

    this._route.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {

    //method called to get single character information
    let id=this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.service.getCharacterDetails(id).subscribe(
      
      data=> {
      console.log(data);
      this.character =data;
      console.log(this.character);
      
  })

  //handle error
  error => {
    console.log("some error occured")
    
    console.log(error.errorMessage)
    this.toastrService.error("OOPS !! Some error occured")
  
  }
       
  }

}
