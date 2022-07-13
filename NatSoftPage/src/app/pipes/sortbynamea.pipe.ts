import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbynamea'
})
export class SortbynameaPipe implements PipeTransform {

  transform(value: Array<any>): any {
    value.sort((a,b) => {
      let x = a.empName.toLowerCase();
      let y = b.empName.toLowerCase();

      if (x<y) return -1;
      else if (x>y) return 1;
      else return 0;
    });
    return value;
  }

}
