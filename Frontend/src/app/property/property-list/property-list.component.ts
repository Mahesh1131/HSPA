import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  constructor(private housingservices: HousingService) {}

  propertites: Array<IProperty> = [];
  ngOnInit() {
    this.housingservices.getallproperties().subscribe(
      data => {

        this.propertites = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
