import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'checkNoteDatePipe'
})
export class checkNoteDatePipe implements PipeTransform{
  transform( value: any):any {
    let todayDate = new Date().getUTCDate();
    let todayMonth = new Date().getUTCMonth();

    let noteDate = value['currentDayDate'];
    let noteMonth = value['currentMonthDate'];


    if(todayDate === noteDate && todayMonth === noteMonth){
      return 'Today';
    } else if(todayDate === noteDate + 1){
      return 'Yesterday';
    }else{
      return value['date'];
    }
  }
}
