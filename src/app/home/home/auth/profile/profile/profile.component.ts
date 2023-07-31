import { Component, OnInit } from '@angular/core';
import { authriService } from '../../../services/authri.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  constructor(
    private authriService:authriService
  ){}
  ngOnInit(): void {
    this.userDetails();
  }

  userDetail:any = {};

  userDetails(){
    let user = this.authriService.userDetails().then(res =>{
      if(this.userDetail){
        this.userDetail = res;
      }

    });

  }






}
