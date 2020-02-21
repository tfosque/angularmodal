import { Pipe, PipeTransform } from '@angular/core';

// TODO: Change pipe to a directive
/** Surrounds  */
@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, text: any): any {
    if (!text) {
      return value;
    }
    // 'g' is global right to match all instances instead of just the first, and implements case sensitive.
    //'gi' for case insensitive
    const re = new RegExp(text, 'gi');
    return value.replace(re, '<span  class="highlight">' + text + '</span>');
  }
}