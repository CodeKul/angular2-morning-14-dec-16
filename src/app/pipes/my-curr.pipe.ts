import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurr'
})
export class MyCurrPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(`value is ${value} and args[0] is ${args}`);
    
    if (args === 'US') return parseInt(value) * 60;
    if (args === 'UK') return parseInt(value) * 80;
    return parseInt(value);
  }
}
