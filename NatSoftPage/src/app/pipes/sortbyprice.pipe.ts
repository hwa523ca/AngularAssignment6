import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyprice'
})
export class SortbypricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
