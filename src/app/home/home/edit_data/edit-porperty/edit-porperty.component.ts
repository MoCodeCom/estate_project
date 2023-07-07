import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-edit-porperty',
  templateUrl: './edit-porperty.component.html',
  styleUrls: ['./edit-porperty.component.css']
})
export class EditPorpertyComponent implements OnDestroy, OnInit{
  constructor(
    private elementRef: ElementRef,
    private mapingService:maping,
    private dbService:db
    ){}

    @Input() closeForm:boolean; //form tenant page true/false
    @Input() selectedClient:any; //from tenant page object data
    @Output() close = new EventEmitter<void>();

    /* --- Landlord data --- */
  @ViewChild('comboBoxList') comboBoxListRef:ElementRef;
  @ViewChild('address') addressRef:ElementRef;
  @ViewChild('city') cityRef:ElementRef;
  @ViewChild('postcode') postcodeRef:ElementRef;
  @ViewChild('date') dateRef:ElementRef;
  @ViewChild('rent') rentRef:ElementRef;
  @ViewChild('charge') chargeRef:ElementRef;
  @ViewChild('details') detailsRef:ElementRef;
  /* --- End landlord data ---*/



    //client data
    ownerList =[];
    showDefault:boolean=true;

    /**------- */
    property:any;
    newproperty:any;
    postcodeNotExist:boolean = false;
    loading:boolean = false;
    /**------- */

  ngOnInit(): void {
    this.landlordListData();
    this.property = this.selectedClient;
  }

  async onSubmit(form: NgForm){
    this.postcodeNotExist= false;
    let boolPostcode = await this.mapingService.checkPostcode(this.postcodeRef.nativeElement.value);

    // to check postcode if it is undefind not accepted
    if(boolPostcode === undefined){
      console.log('this is undefined value');
      this.postcodeRef.nativeElement.value = '';
      this.postcodeNotExist = true;
    }else{
      this.newproperty = {
        owner:this.comboBoxListRef.nativeElement.value.toLowerCase(),
        address:this.addressRef.nativeElement.value.toLowerCase(),
        city:this.cityRef.nativeElement.value.toLowerCase(),
        postcode:this.postcodeRef.nativeElement.value.toUpperCase(),
        date:this.dateRef.nativeElement.value.toLowerCase(),
        rent:this.rentRef.nativeElement.value.toLowerCase(),
        charge:this.chargeRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase()
      }

      console.log(this.newproperty);
      console.log(this.property);

      this.dbService.updateData(this.property,this.newproperty,'propertyDb');
      this.onClose();
    }

  }

  async landlordListData(){
    this.loading = true;
    await this.dbService.getData('landlordDb').then(
      res =>{
        this.ownerList  =[];
        res.forEach(element =>{
          this.ownerList.push(element.data());
        });
        this.loading = false;
      }
    );
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
