import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { db } from '../../services/db.service';
import jwt_decode from "jwt-decode";

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
    private dbService:db
    ){}



  ngOnInit(): void {
    this.onSelectedClient();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;

  }


  onDelete(){

    //this.dbService.deleteData(this.ClientDetails,this.dbName);
    //this.dbService.deleteStorageData(this.ClientDetails['image']);
    this.userDataDetails();
    this.onClose();
  }

  onClose(){
    this.ngOnDestroy();
  }


  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }


  userDataDetails(){

    if(localStorage.getItem('userData') !== null ){
      this._userData = JSON.parse(localStorage.getItem('userData'));
      if(this._userData){
        let jwt = jwt_decode(this._userData);
        console.log(jwt);
        //this.emailSignIn = jwt['email'];
        //this.emailSignIn = this._userData.email;
        //this.reload();
      }else{
        //this.emailSignIn = '';
      }
    }

    }
}
