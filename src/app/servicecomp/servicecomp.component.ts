import { BridgeService } from './bridge.service';
import { FirstService } from './first.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-servicecomp',
    templateUrl: './servicecomp.component.html',
    styleUrls: ['./servicecomp.component.css']
    //providers : [FirstService]
})
export class ServicecompComponent {

    private citiesOne: string[];
    private first: FirstService;
    private bridge : BridgeService;

    constructor(first: FirstService, bridge : BridgeService) {
        this.citiesOne = [];
        this.first = first;
        this.citiesOne = this.first.citiesFromWeb();
        this.bridge = bridge;
    }

    public addNewCityOne(city: string) {
        this.first.addNewCity(city);
    }
    public onColorClick(color: string) {
        this.bridge.sendColor(color);
    }
}
