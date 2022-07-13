import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbypriceup'
})
export class SortbypriceupPipe implements PipeTransform {

  transform(value: Array<any>): any {
    value.sort((a,b) => {
      let x = a.prodPrice;
      let y = b.prodPrice;

      if (x<y) return -1;
      else if (x>y) return 1;
      else return 0;
    });
    return value;
  }

}
