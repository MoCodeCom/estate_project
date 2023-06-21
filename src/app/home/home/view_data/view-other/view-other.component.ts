import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-other',
  templateUrl: './view-other.component.html',
  styleUrls: ['./view-other.component.css']
})
export class ViewOtherComponent implements OnInit, OnDestroy{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @Input() selectedClient:any;
  ClientDetails:any;

  constructor(
    private elementRef: ElementRef
    ){}


  ngOnInit(): void {
    this.onSelectedClient();
  }

  onClose(){
    this.ngOnDestroy();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
