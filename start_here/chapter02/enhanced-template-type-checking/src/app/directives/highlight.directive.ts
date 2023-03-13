import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';

export enum HighlightColor {
  Yellow = 'yellow',
  LightGreen = 'lightgreen',
  LightCoral = 'lightcoral'
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor: HighlightColor = HighlightColor.Yellow;
  originalHTML = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      const highlightedHTML = this.originalHTML.replace(
        regExp,
        `<span style="background-color: ${this.highlightColor}">$1</span>`
      );
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        highlightedHTML
      );
    } else {
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.originalHTML
      );
    }
  }

}
