import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { IProperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getallproperties():Observable<IProperty[]> {
    debugger
    return this.http.get('data/propertites.json').pipe(
      map(data=>{
        const propertiesArray:Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    )
  }
}
