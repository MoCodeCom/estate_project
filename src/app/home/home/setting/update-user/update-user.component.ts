import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { db } from '../../services/db.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  @Input() closeForm:boolean;
  @Input() dbName:string;
  @Input() selectedClient:any;
  @Input() btn:any;
  @Output() close = new EventEmitter<void>();
  //client data
  ClientDetails:any;
  _userData:any;
  activeStatus:string = '';
  activeAuthori:string = '';
  _email:string = '';


  constructor(
    private elementRef: ElementRef,
    private dbService:db,
    ){}



  ngOnInit(): void {
    this.onSelectedClient();
    this.activeStatus = this.ClientDetails['status'];
    this._email = this.ClientDetails['email'];
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
  }


  onUpdateActivation(){
    setTimeout(() => {
      this.userActivation();
      this.onClose();

    }, 250);
  }

  onUpdateAuthorization(){
    setTimeout(() => {
      this.userAuthorization();
      this.onClose();

    }, 250);
  }

  onClose(){
    setTimeout(() => {
      this.ngOnDestroy();
    }, 250);


  }


  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
    window.location.reload();
  }


  async userActivation(){

    if(this.ClientDetails['status'] == 'active'){
      this.activeStatus = 'unactive';
    }
    if(this.ClientDetails['status'] == 'unactive'){
      this.activeStatus = 'active';
    }

    await this.dbService.updateFieldStatus('usersDb',this._email,this.activeStatus);
  }

  async userAuthorization(){
    if(this.ClientDetails['authori']==''){
      this.activeAuthori = 'none';
    }
    if(this.ClientDetails['authori'] == 'yes'){
      this.activeAuthori = 'none';
    }
    if(this.ClientDetails['authori'] == 'none'){
      this.activeAuthori = 'yes';
    }

    await this.dbService.updateFieldAuthorization('usersDb',this._email,this.activeAuthori);
  }
}
