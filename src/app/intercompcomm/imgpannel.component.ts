import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-imgpannel',
  templateUrl: './imgpannel.component.html',
  styleUrls: ['./imgpannel.component.css']
})
export class ImgpannelComponent {

  @Input() private hero : String;
}
