import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
import { count, from, map, of } from 'rxjs';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
public Country:any
public data : any 
public native: any
public three: any
public currency: any

  constructor(private dataStore:DataStoreService) { }

  ngOnInit(): void {
    this.dataStore.getCountry().pipe(
      map(res=> this.Country = res)
    ).subscribe()
      this.three = Object.keys(this.Country.currencies)
      this.data = this.Country.altSpellings.length -1
      this.currency = this.Country.currencies[this.three].name
    this.native = this.Country.altSpellings[this.data]
    console.log(Object.values(this.Country.languages))
  }

}
