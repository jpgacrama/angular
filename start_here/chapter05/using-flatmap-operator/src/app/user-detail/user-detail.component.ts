import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { takeWhile, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser;
  similarUsers: IUser[];
  isComponentAlive: boolean;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.route.paramMap
      .pipe(
        takeWhile(() => !!this.isComponentAlive),
        mergeMap((params) => {
          this.user = null;
          this.similarUsers = null;
          const userId = params.get('uuid');
          return this.userService.getUser(userId).pipe(
            mergeMap((user: IUser) => {
              this.user = user;
              return this.userService.getSimilarUsers(userId);
            })
          );
        })
      )
      .subscribe((similarUsers: IUser[]) => {
        this.similarUsers = similarUsers;
      });
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
