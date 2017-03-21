import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatelist',
  templateUrl: './templatelist.component.html',
  styleUrls: ['./templatelist.component.css']
})
export class TemplatelistComponent implements OnInit {

  numbers: Array<number> = [1, 2, 3, 4,5,6];

  constructor() {
   
  }
  
  ngOnInit() {
  }

}
