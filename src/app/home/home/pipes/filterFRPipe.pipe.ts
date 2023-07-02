import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filterFRPipe'
})
export class filterFRPipe implements PipeTransform{
  transform( value: any, nameData:string, fromDate?:string, toDate?:string):any {

    if(nameData == undefined || fromDate == undefined || toDate == undefined){
      return value;
    }
    let reportList = [];
    nameData = nameData.toLowerCase();
    for(let item of value){
      let from = this.getDate(fromDate);
      let to = this.getDate(toDate);
      let filterDate = item['date'];
      let filterD = this.getDate(filterDate);

      if(nameData === '* all clients' && filterD <= to && filterD >= from ||
      item['name'] === nameData && filterD <= to && filterD >= from){
        reportList.push(item);
      }
    }
    return reportList;
  }

  getDate(date):any{
    return Date.parse(date);
  }

}
