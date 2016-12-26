import { Menu } from './menu';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent  {

  @Input() private  inMenu : Menu;
}
