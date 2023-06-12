import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning-msg',
  templateUrl: './warning-msg.component.html',
  styleUrls: ['./warning-msg.component.css']
})
export class WarningMsgComponent {
  @Input() closeForm:boolean;
  @Input() selectedClient:any;
  @Output() close = new EventEmitter<void>();
  //client data
  ClientDetails:any;

  constructor(
    private elementRef: ElementRef
    ){}


  ngOnInit(): void {
    this.onSelectedClient();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
  }




  onClose(){
    this.ngOnDestroy();
  }


  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
