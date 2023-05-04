import { trigger, style, animate, transition } from '@angular/animations';
export const ANIMATIONS = {
  LIST_ITEM_ANIMATION: trigger('listItemAnimation', [
    transition('void => *', [
      style({
        opacity: 0,
      }),
      animate(
        '0.5s ease',
        style({
          opacity: 1,
        })
      ),
    ]),
    ,
    transition('* => void', [
      style({
        opacity: 1,
      }),
      animate(
        '0.5s ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
};
