import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filterFRPipe'
})
export class filterFRPipe implements PipeTransform{
  transform( value: any, nameData:string, formDate?:string, toDate?:string):any {
    let reportList = [];
    console.log(nameData);
    for(let item of value){

      if(item[nameData] === nameData){
        reportList.push(item)
      }
    }

    return reportList;
  }

}
