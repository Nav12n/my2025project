import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightdiretives]'
})
export class Highlightdiretives {
@Input() apphighlight='';
  constructor(private el : ElementRef) { }
@HostListener('mouseenter') onmouseenter(){
  this.highlight(this.apphighlight||'yellow');
}
@HostListener('mouseleave') onmouseleave(){
  this.highlight('');
}

private highlight(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}
}
