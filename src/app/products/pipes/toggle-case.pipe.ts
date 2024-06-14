import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, ToUpper: boolean = false): string {
    console.log({ value, ToUpper });

    return ToUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
