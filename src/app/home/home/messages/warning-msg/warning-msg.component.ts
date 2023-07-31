import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { db } from '../../services/db.service';
import jwt_decode from "jwt-decode";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth } from 'firebase/auth';
import { authService } from '../../services/auth.service';


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
  _userData:any;
  constructor(
    private elementRef: ElementRef,
    private dbService:db,
    private ngAuth:AngularFireAuth,
    private authService:authService
    ){}



  ngOnInit(): void {
    this.onSelectedClient();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;

  }


  onDelete(){

    this.dbService.deleteData(this.ClientDetails,this.dbName);
    this.dbService.deleteStorageData(this.ClientDetails['image']);
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
