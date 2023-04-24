import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  state(
    'active',
    style({
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'white',
    })
  ),
  transition('void => *', [
    style({
      transform: 'translateX(-200px)',
      opacity: 0,
    }),
    animate(
      '1.5s ease',
      keyframes([
        style({
          transform: 'translateX(-200px) scale3d(0.4, 0.4, 0.4)',
          offset: 0,
        }),
        style({
          transform: 'translateX(0)',
          offset: 1,
        }),
      ])
    ),
  ]),
]);
