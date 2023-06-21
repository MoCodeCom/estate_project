import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.css']
})
export class AddOtherComponent implements OnDestroy{
  constructor(
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
