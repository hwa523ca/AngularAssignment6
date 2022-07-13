import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyid2'
})
export class Sortbyid2Pipe implements PipeTransform {

  transform(value: Array<any>): any {
    value.sort((a,b) => {
      let x = a.prodID;
      let y = b.prodID;

      if (x<y) return -1;
      else if (x>y) return 1;
      else return 0;
    });
    return value;
  }

}
