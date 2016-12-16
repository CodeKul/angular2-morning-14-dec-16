import { Component} from '@angular/core';

@Component({
  selector: 'app-demoexample',
  templateUrl: './demoexample.component.html',
  styleUrls: ['./demoexample.component.css']
})
export class DemoexampleComponent  {

  private clickedCartoon : String;
  
  public onCartoonClicked(cartoon : String) {
    if(cartoon == 'mickey') this.clickedCartoon = 'http://cdn1.edgedatg.com/aws/v2/djr/MickeyMouseClubhouse/video/119/29e2c110799153361b251d3641bb06eb/337x190-Q100.jpg?cb=29e2c110799153361b251d3641bb06eb';
    else if(cartoon == 'goofey') this.clickedCartoon = 'http://vignette3.wikia.nocookie.net/disney/images/3/3a/Goofy_KHIII.png/revision/latest?cb=20140908042923';
    else this.clickedCartoon = 'http://1.bp.blogspot.com/-IaYP8Jbbd0A/UZAGKwPXZSI/AAAAAAAAEFo/UnGHLw_8eQc/s1600/Tom+and+Jerry+HD+Wallpapers+9.jpg';
  }
}
