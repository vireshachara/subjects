import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private http : HttpClient) { }

  //Data transfer between the components by EventEmitter method
  // dataEmitter = new EventEmitter<string>();

  //Data transfer between the components by subject method
  dataEmitter = new Subject<string>()

  onButtonClickEntered(data : string){
      this.dataEmitter.next(data)                  // By subject method
      // this.dataEmitter.emit(data)               // By eventEmitter method
  }

}
