import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  get(): any {
    console.log('dddd');
  }
  constructor() { }
}
