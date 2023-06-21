import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-edit-porperty',
  templateUrl: './edit-porperty.component.html',
  styleUrls: ['./edit-porperty.component.css']
})
export class EditPorpertyComponent implements OnDestroy,OnInit{
  constructor(
    private elementRef: ElementRef,
    private dataService:demo_data
    ){
      this.propertyTableList = this.dataService.propertyData();
    }
  ngOnInit(): void {
    this.ownerList = this.dataService.propertyData();
  }
    @Input() closeForm:boolean; //form tenant page true/false
    @Input() selectedClient:any; //from tenant page object data
    @Output() close = new EventEmitter<void>();
    //client data
    ClientDetails:any;
    ownerList =[];
    addressList = [];
    propertyTableList = [];
    showDefault:boolean=true;

  onSubmit(form: NgForm){
      console.log(form.valid);
      this.onClose();
  }

  onClose(){
    this.ngOnDestroy();
  }

  /*
  onSelected(data){
    this.addressList = [];
    console.log(data);
    this.propertyTableList.forEach(element => {
      if(element.Postcode === data){
        this.addressList.push(element.Address);
      }
    });
    this.showDefault = false;
  }*/

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
