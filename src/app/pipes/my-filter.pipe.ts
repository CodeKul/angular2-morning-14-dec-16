import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let result = [];
    for (let val of value) {
      if (val.charAt(0) === args[0]) {
        result.push(val);
      }
    }
    return result;
  }
}
