import { Component, OnInit } from '@angular/core';
import {IceandfireService} from '../iceandfire.service'; //service file injected
import {Router, ActivatedRoute} from '@angular/router'; //To implement routing

import { ToastrService } from 'ngx-toastr' //Toaster service called


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allBooks=[];
  config:any;;
  

  constructor(private router:Router, private _route:ActivatedRoute, private service:IceandfireService, private toastrService:ToastrService) {
    this.config = {
      currentPage:1,
      itemsPerPage:5,
      totalItem:0
    }
  
   }

  ngOnInit() {

    //method called to get book list
    this.service.getBooks().subscribe(res => {

      this.allBooks = res;

      console.log(this.allBooks);
    },
    //implement handle error
    error => {
      console.log("some error occured")
      
      console.log(error.errorMessage)
      this.toastrService.error("OOPS !! Some error occured")
    
    });

    //implemented pagination 
    this._route.queryParams.subscribe(
      params => this.config.currentPage= params['page']?params['page']:1 );
       
      for (let i = 1; i <= 100; i++) {
      this.allBooks.push(`item ${i}`);
      }
       
      }
       
      pageChange(newPage: number) {
          this.router.navigate(['/Books'], { queryParams: { page: newPage } });
  }

}
