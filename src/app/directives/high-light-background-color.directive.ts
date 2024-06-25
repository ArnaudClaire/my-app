import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLightBackgroundColor]'
})
export class HighLightBackgroundColorDirective implements OnInit{
  @Input("appHighLightBackgroundColor") defaultColor?:string;
  @Input() highlightColor?:string;

  @HostListener('mouseenter') onMouseEnter(_eventData: Event) {
  if(!this.highlightColor){return;}
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.defaultColor){return;}
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'darkblue');
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
