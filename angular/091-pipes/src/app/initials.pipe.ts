import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string, ...args: any[]): unknown {
    let values = value.split(' ');

    // First letter of first name, first letter of last name
    return values[0][0] + values[1][0];
  }
}
