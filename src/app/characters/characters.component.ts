import { Component, OnInit } from '@angular/core';
import {IceandfireService} from '../iceandfire.service'; //service file injected to call http service

import {Router, ActivatedRoute} from '@angular/router'; //To route



import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public array=[];

  config:any;

  character:any;

  public allCharacters=[];

  Id=[];




  

  constructor(private router:Router, private _route:ActivatedRoute, private service:IceandfireService, private toastrService:ToastrService) { 
    this.config = {
      currentPage:1,
      itemsPerPage:5,
      totalItem:0
    }
  };

  ngOnInit() {

    //method called to get all characters

  this.service.getCharacters().subscribe(res => {

    this.array=res;
    console.log(this.array)

   this.allCharacters=this.array.map(character => ({...character, id:character.url.split("/").pop()})) //used map to create a new array with the Id property

   console.log(this.allCharacters);


    

  },

  //handle error
  
    error => {
      console.log("some error occured")
      
      console.log(error.errorMessage)
      this.toastrService.error("OOPS !! Some error occured")
    
    });


     
    //implemented pagination
    this._route.queryParams.subscribe(
      params => this.config.currentPage= params['page']?params['page']:1 );
       
      for (let i = 1; i <= 100; i++) {
      this.allCharacters.push(`item ${i}`);
      }
       
      }
       
      pageChange(newPage: number) {
          this.router.navigate(['/characters'], { queryParams: { page: newPage } });
        }
      }

    


  



