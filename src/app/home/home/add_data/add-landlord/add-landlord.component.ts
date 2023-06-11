import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-landlord',
  templateUrl: './add-landlord.component.html',
  styleUrls: ['./add-landlord.component.css']
})
export class AddLandlordComponent implements OnDestroy{
  constructor(
    private router:Router,
    private elementRef: ElementRef
    ){}
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();



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
