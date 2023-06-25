import { AfterViewChecked, Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appHoverEle]'
})
export class HoverEleDirective implements OnInit{
  constructor(private el:ElementRef) {}
    details:string;
  ngOnInit(): void {

  }
}
