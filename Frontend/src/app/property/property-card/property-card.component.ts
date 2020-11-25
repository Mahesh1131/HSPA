import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input()  property!: IProperty;
  // property: any={
  //   "Id":1,
  //   "Name":"Birla House",
  //   "Type":"House",
  //   "Price":12000
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
