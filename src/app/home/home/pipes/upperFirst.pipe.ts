import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'upperFirst'
})
export class upperFirstPipe implements PipeTransform{
  transform( value: string):any {
      if(value){
        //return value.substring(0, limit) + ' ...';
        const arr = value.split(" ");
        for(let i=0;i<arr.length;i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ");
      }
    return value;
  }

}
