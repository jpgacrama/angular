import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription | null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData: string[] = [];

  ngOnInit() {
    this.subscription = new Subscription();
  }

  startStream() {
    const streamSource = interval(1500);
    this.subscription = streamSource
      .pipe(
        map((output) => output % this.inputStreamData.length),
        map((index) => this.inputStreamData[index])
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
