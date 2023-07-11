import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { maping } from '../../services/maping.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent {
  @Input() closeForm:boolean;
  @Input() selectedClient:any;
  @Output() close = new EventEmitter<void>();
  ClientDetails:any;
  //map:L.Map;

  constructor(
    private elementRef: ElementRef,
    private mapServcie:maping
    ){}


  ngOnInit(): void {
    this.onSelectedClient();
    this.mapServcie.initMap(this.selectedClient.postcode);
  }

  onSelectedClient(){
    this.ClientDetails = this.selectedClient;

  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.close.emit()
    this.elementRef.nativeElement.remove();
  }
}
