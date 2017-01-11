import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurr'
})
export class MyCurrPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(`value is ${value} and args[0] is ${args}`);
    
    if (args[0] == 'US') return value * 60;
    if (args[0] == 'UK') return value * 80;
    return value;
  }
}
