import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-view-money',
  templateUrl: './view-money.component.html',
  styleUrls: ['./view-money.component.css']
})
export class ViewMoneyComponent implements OnInit, OnDestroy{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @Input() selectedClient:any;
  ClientDetails:any;
  totalAmount = 0;
  loading:boolean;


  constructor(
    private elementRef: ElementRef
    ){}


  ngOnInit(): void {
    this.ClientDetails = this.selectedClient;
  }


  onPrint(invoiceP:any){
    let printContent = document.getElementById(invoiceP).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }

}
