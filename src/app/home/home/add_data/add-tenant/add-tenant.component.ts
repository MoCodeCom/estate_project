import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnDestroy{
  constructor(
    private elementRef: ElementRef,
    private dataService: demo_data
    ){
      this.landlordTableList = dataService.landlordData();
    }
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  landlordTableList = [];




  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }

  onSubmit(form: NgForm){
    console.log(form.valid);

    this.onClose();
  }
}
