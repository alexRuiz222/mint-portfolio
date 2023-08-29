import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
  transition('Home => *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', height: '100%', width: '100%' }),
      {
        optional: true,
      }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('1s ease-in-out', style({ transform: 'translateY(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('1s ease-in-out', style({ transform: 'translateY(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Jobs => Home', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', height: '100%', width: '100%' }),
      {
        optional: true,
      }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(-100%)' }),
          animate('1s ease-in-out', style({ transform: 'translateY(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('1s ease-in-out', style({ transform: 'translateY(100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
