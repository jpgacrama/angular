import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200,
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    const wordCount = text.trim().split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / this.configuration.wordsPerMinute);

    const readTimeElement = this.renderer.createText(`${readTime} min read`);
    this.renderer.appendChild(this.el.nativeElement, readTimeElement);
  }

  createTimeString(timeInMinutes: number) {
    if (timeInMinutes === 1) {
      return '1 minute';
    } else if (timeInMinutes < 1) {
      return '< 1 minute';
    } else {
      return `${timeInMinutes} minutes`;
    }
  }
}
