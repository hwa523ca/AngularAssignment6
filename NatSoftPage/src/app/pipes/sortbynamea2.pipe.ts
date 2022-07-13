import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbynamea2'
})
export class Sortbynamea2Pipe implements PipeTransform {

  transform(value: Array<any>): any {
    value.sort((a,b) => {
      let x = a.prodName.toLowerCase();
      let y = b.prodName.toLowerCase();

      if (x<y) return -1;
      else if (x>y) return 1;
      else return 0;
    });
    return value;
  }

}
