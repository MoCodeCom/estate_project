import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'shorten'
})
export class shortenPipe implements PipeTransform{
  transform( value: string, limit:number ):any {
      if(value.length > limit){
        return value.substring(0, limit) + ' ...';
      }
    return value;
  }

}
