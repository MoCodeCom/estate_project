import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent {
  @Input() closeForm:boolean;
  @Input() selectedClient:any;
  @Output() close = new EventEmitter<void>();
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
