import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyid'
})
export class SortbyidPipe implements PipeTransform {

  transform(value: Array<any>): any {
    value.sort((a,b) => {
      let x = a.empID;
      let y = b.empID;

      if (x<y) return -1;
      else if (x>y) return 1;
      else return 0;
    });
    return value;
  }

}
