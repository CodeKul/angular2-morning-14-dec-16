import { BridgeService } from './bridge.service';
import { FirstService } from './first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impcomp',
  templateUrl: './impcomp.component.html',
  styleUrls: ['./impcomp.component.css']
})
export class ImpcompComponent {

  private cities: string[];
  private first: FirstService;
  private bridge : BridgeService;
  private color : string;

  constructor(first: FirstService, bridge : BridgeService) {
    this.cities = [];
    this.first = first;
    this.cities = this.first.citiesFromWeb();
    this.bridge = bridge;
    this.bridge.subscribeForColor(color => this.color = color);
  }

  public addNewCity(city: string) {
    this.first.addNewCity(city);
  }
}
