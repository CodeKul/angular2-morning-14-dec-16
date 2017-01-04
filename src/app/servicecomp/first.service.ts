import { Injectable } from '@angular/core';
import { BridgeService } from './bridge.service';

@Injectable()
export class FirstService {

  private cities: string[] = [];
  private bridge: BridgeService;

  public constructor(bridge: BridgeService) {
    this.bridge = bridge;
  }
  public citiesFromWeb(): string[] {
    // fetch all cities from web
    this.cities.push('Pune');
    this.cities.push('Mumbai');
    this.cities.push('Nagpur');
    this.cities.push('Kolhapur');
    return this.cities;
  }

  public addNewCity(city: string) {
    this.cities.push(city);
  }

  checkUser(user: string) {
    return user == 'android';
  }
}
