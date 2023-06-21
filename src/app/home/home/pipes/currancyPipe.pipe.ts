import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'currancy'
})
export class currancyPipe implements PipeTransform{
  transform( value: string):any {
    return '£ '+value+'.00';
  }

}
