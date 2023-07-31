import { Injectable, OnInit } from "@angular/core";

@Injectable({ providedIn:'root'})
export class routeService{

private routeId;

set RouteEdit(routeId){
  this.routeId = routeId;
}

get RouteEdit(){
  return this.routeId;
}

}
