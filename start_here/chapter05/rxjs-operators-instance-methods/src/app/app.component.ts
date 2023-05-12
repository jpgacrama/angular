import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, mergeWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription | null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonsStreamData = ['thunder cats', 'Dragon Ball Z', 'Ninja Turtles'];
  outputStreamData: string[] = [];

  ngOnInit() {
    this.subscription = new Subscription();
  }

  startStream() {
    const streamSource = interval(1500);
    const cartoonStreamSource = interval(1000).pipe(
      map((output) => output % this.cartoonsStreamData.length),
      map((index) => this.cartoonsStreamData[index])
    );
    this.subscription = streamSource
      .pipe(
        map((output) => output % this.inputStreamData.length),
        map((index) => this.inputStreamData[index]),
        mergeWith(cartoonStreamSource)
      )
      .subscribe((element) => {
        this.outputStreamData.push(element);
      });
  }

  stopStream() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
