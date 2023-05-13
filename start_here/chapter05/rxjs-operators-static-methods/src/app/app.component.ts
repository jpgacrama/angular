import { Component } from '@angular/core';
import { interval, Subscription, partition, mergeWith, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription = null;
  movies = [];
  cartoons = [];
  combinedStreamData = [
    {
      type: 'movie',
      title: 'john wick',
    },
    {
      type: 'cartoon',
      title: 'Thunder Cats',
    },
    {
      type: 'movie',
      title: 'inception',
    },
    {
      type: 'cartoon',
      title: 'Dragon Ball Z',
    },
    {
      type: 'cartoon',
      title: 'Ninja Turtles',
    },
    {
      type: 'movie',
      title: 'interstellar',
    },
  ];
  outputStreamData = [];
  ngOnInit() {}

  startStream() {
    const streamSource = interval(1500).pipe(
      map((input) => {
        const index = input % this.combinedStreamData.length;
        return this.combinedStreamData[index];
      })
    );
    const [moviesStream, cartoonsStream] = partition(
      streamSource,
      (item) => item.type === 'movie'
    );
    this.subscription = moviesStream
      .pipe(
        tap((movie) => {
          this.movies.push(movie.title);
        }),
        mergeWith(
          cartoonsStream.pipe(
            tap((cartoon) => {
              this.cartoons.push(cartoon.title);
            })
          )
        )
      )
      .subscribe((input) => {
        this.outputStreamData.push(input);
      });
  }
  stopStream() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
