import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ownStr]'
})
export class OwnstrDirective {

  private tempRef: TemplateRef<any>;
  private viewCon: ViewContainerRef;

  constructor(tempRef: TemplateRef<any>, viewCon: ViewContainerRef) {
    this.tempRef = tempRef;
    this.viewCon = viewCon;
  }

  @Input('ownStr') public set data(num : number){
    if(num == 1) this.viewCon.createEmbeddedView(this.tempRef);
    else this.viewCon.clear();
  }
}
