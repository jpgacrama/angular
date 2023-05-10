import {
  trigger,
  style,
  transition,
  query,
  animate,
  group,
} from '@angular/animations';

const optional = { optional: true };

export const ROUTE_ANIMATION = trigger('routeAnimation', [
  transition('* <=> *', [
    style({
      position: 'relative',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
        }),
      ],
      optional
    ),
    query(
      ':enter',
      [
        style({
          opacity: 0,
        }),
      ],
      optional
    ),
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
      optional
    ),
    query(
      ':enter',
      [
        animate(
          '1s ease-out',
          style({
            opacity: 1,
          })
        ),
      ],
      optional
    ),
  ]),
]);
