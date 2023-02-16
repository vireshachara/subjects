import { Component, OnInit } from '@angular/core';
import { SubService } from '../service/sub.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {

  enteredText : string = '';

  constructor(private subService : SubService) { }

  ngOnInit(): void {
  }

  onClick(){
     this.subService.onButtonClickEntered(this.enteredText)
  }

}
