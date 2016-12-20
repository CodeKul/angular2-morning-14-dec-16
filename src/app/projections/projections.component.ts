import { Component } from '@angular/core';

@Component({
  selector: 'app-projections',
  templateUrl: './projections.component.html',
  styleUrls: ['./projections.component.css']
})
export class ProjectionsComponent {

  private myData : string;

  public constructor(){
    this.myData = 'Hello CodeKul'; // string interpolation
  }
}
