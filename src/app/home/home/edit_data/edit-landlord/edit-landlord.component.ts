import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-landlord',
  templateUrl: './edit-landlord.component.html',
  styleUrls: ['./edit-landlord.component.css']
})
export class EditLandlordComponent implements OnDestroy {
  constructor(
    private elementRef: ElementRef
    ){}
    @Input() closeForm:boolean;
    @Input() selectedClient:any;
    @Output() close = new EventEmitter<void>();
    //client data
    ClientDetails:any;

  onSubmit(form: NgForm){
      console.log(form.valid);
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
