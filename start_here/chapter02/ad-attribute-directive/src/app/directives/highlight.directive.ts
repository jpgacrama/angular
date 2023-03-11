import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.highlightText.firstChange) {
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(
        regExp,
        `<span style="background-color:${this.highlightColor}">\$1</span>`
      );
    }
  }
}
