import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-tenant',
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.css']
})
export class ViewTenantComponent {
  @Input() closeForm:boolean;
  @Input() selectedClient:any;
  @Output() close = new EventEmitter<void>();
  ClientDetails:any;

  constructor(
    private elementRef: ElementRef
    ){}


  ngOnInit(): void {
    this.onSelectedClient();
  }

  onClose(){
    this.ngOnDestroy();
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit()
  }
}
