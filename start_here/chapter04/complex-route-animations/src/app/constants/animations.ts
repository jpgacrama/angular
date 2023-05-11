import {
  trigger,
  style,
  transition,
  query,
  animate,
  group,
  keyframes,
} from '@angular/animations';

const optional = { optional: true };

export const ROUTE_ANIMATION = trigger('routeAnimation', [
  transition('* <=> *', [
    style({
      position: 'relative',
      perspective: '1000px',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [
          animate(
            '1s ease-in',
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '1s ease-out',
            keyframes([
              style({
                opacity: 0,
                offset: 0,
                transform: 'rotateY(180deg) translateX(25%) translateZ(1200px)',
              }),
              style({
                offset: 0.25,
                transform:
                  'rotateY(225deg) translateX(-25%) translateZ(1200px)',
              }),
              style({
                offset: 0.5,
                transform: 'rotateY(270deg) translateX(-50%) translateZ(400px)',
              }),
              style({
                offset: 0.75,
                transform: 'rotateY(315deg) translateX(-50%) translateZ(25px)',
              }),
              style({
                opacity: 1,
                offset: 1,
                transform: 'rotateY(360deg) translateX(0) translateZ(0)',
              }),
            ])
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
