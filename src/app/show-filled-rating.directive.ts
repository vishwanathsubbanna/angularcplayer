import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ShowFilledRating]'
})

export class ShowFilledRatingDirective {

  @Input('ShowFilledRating') set ShowFilledRating(condition:boolean)
  {
    if(condition)
    {
      this.viewContainer.createEmbeddedView(this.templateRef);      
    }
    else
    {
      this.viewContainer.clear();

    }
  }
  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }
  
}
