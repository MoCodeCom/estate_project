import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-other',
  templateUrl: './edit-other.component.html',
  styleUrls: ['./edit-other.component.css']
})
export class EditOtherComponent implements OnDestroy {
  constructor(
    private elementRef: ElementRef
    ){}
    @Input() closeForm:boolean; //form landlord page true/false
    @Input() selectedClient:any; //from landlord page object data
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
