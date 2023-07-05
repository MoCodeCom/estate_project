import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-warning-msg',
  templateUrl: './warning-msg.component.html',
  styleUrls: ['./warning-msg.component.css']
})
export class WarningMsgComponent {
  @Input() closeForm:boolean;
  @Input() dbName:string;
  @Input() selectedClient:any;
  @Output() close = new EventEmitter<void>();
  //client data
  ClientDetails:any;

  constructor(
    private elementRef: ElementRef,
    private dbService:db
    ){}



  ngOnInit(): void {
    this.onSelectedClient();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
  }


  onDelete(){
    this.dbService.deleteData(this.ClientDetails,this.dbName);
    this.onClose();
  }

  onClose(){
    this.ngOnDestroy();
  }


  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
