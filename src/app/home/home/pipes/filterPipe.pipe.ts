import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filter'
})
export class filerPipe implements PipeTransform{
  transform(
    value: any,
    filterString:string = '',
    propfirstName:string,
    proplastName:string,
    propAddress:string,
    propPhone:string,
    propOwner?:string,
    propPostcode?:string
    ):any {
    if(value.length === 0 || filterString === '' ){
      return value;
    }
    const resultArray = [];

    for(const item of value){

      if(item[propfirstName] === filterString.toLowerCase() ||
         item[proplastName] === filterString.toLowerCase() ||
         item[propPostcode] === filterString.toLowerCase() ||
         item[propAddress]=== filterString||
         item[propPhone]=== filterString||
         item[propOwner]=== filterString.toLowerCase()
         ){
        resultArray.push(item);
      }


    }

    return resultArray;
  }

}
