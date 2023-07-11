import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { demo_data } from '../../services/demo_data.service';
import { maping } from '../../services/maping.service';
//import { __asyncValues, __values } from 'tslib';
//import { lastValueFrom } from 'rxjs';
import { db } from '../../services/db.service';
//import { getStorage } from 'firebase/storage';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit, OnDestroy{

  constructor(
    private elementRef: ElementRef,
    //private dataService: demo_data,
    private mapingService:maping,
    private dbService:db
    ){}

  @Input() closeForm:boolean;
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


  //propertyTableList:any;
  landlordList:any;
  postcodeNotExist:boolean = false;
  property:any;
  loading:boolean = false;
  propertyId:any;
  filePath:any;
  fileUpload:any;



  ngOnInit(): void {
    this.landlordListData();
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
      this.property = {
        owner:this.comboBoxListRef.nativeElement.value.toLowerCase(),
        address:this.addressRef.nativeElement.value.toLowerCase(),
        city:this.cityRef.nativeElement.value.toLowerCase(),
        postcode:this.postcodeRef.nativeElement.value.toUpperCase(),
        date:this.dateRef.nativeElement.value.toLowerCase(),
        rent:this.rentRef.nativeElement.value.toLowerCase(),
        charge:this.chargeRef.nativeElement.value.toLowerCase(),
        detail:this.detailsRef.nativeElement.value.toLowerCase(),
        image:this.filePath
      }

      this.dbService.addData(this.property,'propertyDb').then(res =>{

      }).catch(err =>{
        console.log(err);
      });
      this.onClose();
    }

    this.dbService.storageData(this.filePath, this.fileUpload);

  }

  async landlordListData(){
    this.loading = true;
    this.landlordList  =[];
    await this.dbService.getData('landlordDb').then(
      res =>{
        res.forEach(element =>{
          this.landlordList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  uploadFile(event:any){
    const file:File = event.target.files[0];
    this.fileUpload = file;


    /*---------------- */
    let dateStr = new Date().toString();
    let postcodeStr= this.postcodeRef.nativeElement.value;
    this.filePath = `estateImage/${postcodeStr.replace(/\s/g,'')+dateStr.replace(/\s/g,'')}`;

    /*---------------- */
  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.close.emit();
    this.elementRef.nativeElement.remove();

  }



}
