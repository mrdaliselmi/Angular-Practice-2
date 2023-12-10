import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'
@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  @memo()
  transform(value: number): number {
    return this.fibonacci(value);
  }

  @memo()
  fibonacci(value: number): number {
    if (value == 0 || value == 1) {
      return 1;
    }
    return this.fibonacci(value - 1) + this.fibonacci(value - 2);
  }

}
