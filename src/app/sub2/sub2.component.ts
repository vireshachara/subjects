import { Component, OnInit } from '@angular/core';
import { SubService } from '../service/sub.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  recivedText : string = "";

  constructor(private subService : SubService) { }

  ngOnInit(): void {
    this.subService.dataEmitter.subscribe((data)=> {
      this.recivedText = data;
    })
  }

}
