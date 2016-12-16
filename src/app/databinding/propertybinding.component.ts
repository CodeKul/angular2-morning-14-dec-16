import { Component} from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  private inputValue : String;
  private inputType : String;

  constructor() { 
    this.inputValue = 'Okay';
    this.inputType = 'input';
  }

}
