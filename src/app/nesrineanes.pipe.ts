import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nesrineanes'
})
export class NesrineanesPipe implements PipeTransform {

  transform(value: string): string {
    return  "*"+ value;
  }

}
