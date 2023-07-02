import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filterTFRPipe'
})
export class filterTFRPipe implements PipeTransform{
  transform( value:any, values: any, nameData:string, fromDate?:string, toDate?:string):any {
    let totalReport = 0;
    if(nameData == undefined || fromDate == undefined || toDate == undefined){
      return totalReport;
    }

    nameData = nameData.toLowerCase();
    for(let item of values){
      let from = this.getDate(fromDate);
      let to = this.getDate(toDate);
      let filterDate = item['date'];
      let filterD = this.getDate(filterDate);
      if(nameData === '* all clients' && filterD <= to && filterD >= from ||
      item['name'] === nameData && filterD <= to && filterD >= from){
        totalReport += item['totalAmount'];
      }
    }
    return totalReport;
  }

  getDate(date):any{
    return Date.parse(date);
  }

}
