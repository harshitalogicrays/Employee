import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalsal'
})
export class TotalsalPipe implements PipeTransform {

  transform(salary: any, hra:any,da:any): number {
    return parseInt(salary)+parseInt(hra)+parseInt(da);
  }

}
