import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnDestroy{

  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();


  propertyTableList = [];
  landlordList = [];




  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data
    ){}

  ngOnInit(): void {
    this.landlordList = this.dataService.landlordData();
    this.propertyTableList = this.dataService.propertyData();

  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }

  onSubmit(form: NgForm){

    /* submit data then close ...*/
    console.log(form.value);
    this.onClose();
  }

}
