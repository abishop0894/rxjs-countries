import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }
  private country: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getCountry():Observable<any> {
    return this.country.asObservable();
  }

  //updates value and triggers subscribe
  public setCountry(country) {
    this.country.next(country);
  }
}
