import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import {IceandfireService} from './iceandfire.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { RouterModule, Router } from '@angular/router';
import { DetailedviewComponent } from './detailedview/detailedview.component';
import { CharacterinfoComponent } from './characterinfo/characterinfo.component';
import { HouseinfoComponent } from './houseinfo/houseinfo.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    DetailedviewComponent,
    CharacterinfoComponent,
    HouseinfoComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),// ToastrModule added

    RouterModule.forRoot([
      {path: 'Books',component:BooksComponent},
      {path: '',redirectTo:'Books',pathMatch:'full'},
      {path: 'characters',component:CharactersComponent},
      {path: 'houses',component:HousesComponent},  //path defined to route to the component page
      {path:'books/:id',component:DetailedviewComponent},
      {path:'character/:id',component:CharacterinfoComponent},
      {path:'house/:id',component:HouseinfoComponent},
      {path: '**',component:NotfoundComponent}



    ])
  ],
  providers: [IceandfireService], //service file injected globally
  bootstrap: [AppComponent]
})
export class AppModule { }
