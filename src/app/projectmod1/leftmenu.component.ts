import { Menu } from './menu';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent {

  @Output() private menuClick : EventEmitter<Menu>;
  private menus: Menu[];

  constructor() {
    this.menus = [];
    this.menuClick = new EventEmitter<Menu>();
    this.menus.push(new Menu('Android','https://pbs.twimg.com/profile_images/616076655547682816/6gMRtQyY.jpg','humenoid','Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices'));
    this.menus.push(new Menu('iOS','https://www.cloudcms.com/images/quickstarts/ios/ios.87bc8ebd.jpg','Half eaten apple','See the iPhone 7, Apple Watch Series 2 and AirPods. Explore iPad, Mac, iOS, watchOS, macOS and more. Visit the site to learn, buy and get support.'));
    this.menus.push(new Menu('Symbian','http://articles-images.sftcdn.net/wp-content/uploads/sites/3/2013/10/Symbian-os-664x374-664x374.png','Ruined Ruler','zldgkdjlszfgjk'));
    this.menus.push(new Menu('Palm','http://vignette2.wikia.nocookie.net/vsrecommendedgames/images/3/35/Palm_OS_logo.png/revision/latest?cb=20120921225610','i am not a tree','Palm OS (also known as Garnet OS) is a discontinued mobile operating system initially developed by Palm, Inc., for personal digital assistants (PDAs) in 1996. Palm OS was designed for ease of use with a touchscreen-based graphical user interface. It is provided with a suite of basic applications for personal information management. Later versions of the OS have been extended to support smartphones. Several other licensees have manufactured devices powered by Palm OS'));
    this.menus.push(new Menu('Bada','https://tctechcrunch2011.files.wordpress.com/2011/09/samsung-bada-logo.jpg','need some better name','Bada is a discontinued operating system for mobile devices such as smartphones and tablet computers. It was developed by Samsung Electronics. Its name is derived from "바다", meaning "ocean" or "sea" in Korean'));
  }

  public onLeftMenuClicked(menu : Menu) {
    console.log(`Left Menu Clicked is ${menu.getName()}`);
    this.menuClick.emit(menu);
  }
}
