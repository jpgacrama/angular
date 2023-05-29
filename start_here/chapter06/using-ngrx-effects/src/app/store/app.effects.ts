import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import { APP_ACTIONS, getUsersFailure, getUsersSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService) {}
}
