import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    InfoComponent,
    NavbarComponent,
 
  ],
  imports: [
    BrowserModule, HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
