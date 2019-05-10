import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tenWords'
})
export class TenWordsPipe implements PipeTransform {

  transform(value: string, args: any[]): string | boolean {
    if (value == null) {
      return value;
    }

    var totalString = '';
    const words = value.split(/\s+\b/);
    for (let index = 0; index <= 9; index++) {
      totalString += words[index] + ' ';
    }
    return totalString.trim() + '...';
  }
}
