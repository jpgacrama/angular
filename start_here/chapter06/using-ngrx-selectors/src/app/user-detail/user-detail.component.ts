import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../core/interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<IUser> = null;
  similarUsers$: Observable<IUser[]> = null;
  isComponentAlive: boolean;
  constructor() {}

  ngOnInit() {
    this.isComponentAlive = true;
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
