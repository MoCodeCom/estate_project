import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-landlord',
  templateUrl: './view-landlord.component.html',
  styleUrls: ['./view-landlord.component.css']
})
export class ViewLandlordComponent implements OnInit, OnDestroy{
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
