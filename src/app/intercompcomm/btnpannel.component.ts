import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnpannel',
  templateUrl: './btnpannel.component.html',
  styleUrls: ['./btnpannel.component.css']
})
export class BtnpannelComponent  {

  @Output() private heroClick : EventEmitter<String>;

  constructor() { 
    this.heroClick = new EventEmitter<String>();
  }

  public onHeroClick(hero : String){

    let heroLink = '';
    if(hero == 'batMan') heroLink = 'http://cdn1.edgedatg.com/aws/v2/djr/MickeyMouseClubhouse/video/119/29e2c110799153361b251d3641bb06eb/337x190-Q100.jpg?cb=29e2c110799153361b251d3641bb06eb'
    else if(hero == 'spiderMan') heroLink = 'http://vignette3.wikia.nocookie.net/disney/images/3/3a/Goofy_KHIII.png/revision/latest?cb=20140908042923';
    else heroLink = 'http://1.bp.blogspot.com/-IaYP8Jbbd0A/UZAGKwPXZSI/AAAAAAAAEFo/UnGHLw_8eQc/s1600/Tom+and+Jerry+HD+Wallpapers+9.jpg';
    
    this.heroClick.emit(heroLink);
  }
}
