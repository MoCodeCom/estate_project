import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'currancy'
})
export class currancyPipe implements PipeTransform{
  transform( value: any):any {
    const formatter = new Intl.NumberFormat("en-GB",{
      style: "currency",
      currency:"GBP",
      minimumFractionDigits: 2
    });

    return formatter.format(value);
  }

}
