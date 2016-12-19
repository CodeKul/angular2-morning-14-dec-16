import { Component} from '@angular/core';

@Component({
  selector: 'app-intercompcomm',
  templateUrl: './intercompcomm.component.html',
  styleUrls: ['./intercompcomm.component.css']
})
export class IntercompcommComponent  {

  private heroLink : String;

  constructor() { }

  public onHeroClickInParent(heroLink : String){
    console.log(` Hero Link ${heroLink}`);

    this.heroLink = heroLink;
  }
}
