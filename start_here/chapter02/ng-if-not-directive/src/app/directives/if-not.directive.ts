import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  constructor() {}
  @Input() set appIfNot(value: boolean) {
    console.log(`appIfNot value is ${value}`);
  }
}
