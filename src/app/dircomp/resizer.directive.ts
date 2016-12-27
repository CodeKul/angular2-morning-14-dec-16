import { element } from 'protractor';
import { Directive, 
  ElementRef, 
  OnInit, 
  Renderer, 
  Input, 
  HostListener,
  HostBinding
 } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizerDirective implements OnInit{

  private elRef: ElementRef;
  private rend : Renderer;
  @Input('resizer') private sizeEl :  number;

  @HostBinding('style.width') elementSize: string;

  constructor(elRef: ElementRef, rend: Renderer) {
    this.elRef = elRef;
    this.rend = rend;
  }

  ngOnInit(){
    //this.elRef.nativeElement.style.width = '500px';
    this.rend.setElementStyle(this.elRef.nativeElement,'width',this.sizeEl+'px');
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    //this.rend.setElementStyle(this.elRef.nativeElement,'width',(this.sizeEl+100)+'px');
    this.elementSize = (this.sizeEl +100) + 'px';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.elementSize = this.sizeEl + 'px';
    //this.rend.setElementStyle(this.elRef.nativeElement,'width',(this.sizeEl)+'px');
  }
}
