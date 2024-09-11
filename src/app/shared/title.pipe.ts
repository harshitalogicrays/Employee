import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  //pure:true
})
export class TitlePipe implements PipeTransform {

  transform(fname: string, gender: string): string {
    if(gender.toLowerCase()=='male')
        return 'Mr. '+fname
    else 
      return 'Ms. '+fname
  }

}
