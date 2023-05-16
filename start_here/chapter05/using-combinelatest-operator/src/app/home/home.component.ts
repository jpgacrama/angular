import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COLORS } from '../constants';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];

  boxForm = new FormGroup({
    size: new FormControl(''),
    borderRadius: new FormControl(''),
    textColor: new FormControl(''),
    backgroundColor: new FormControl(''),
  });
  boxStyles$: Observable<{
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    borderRadius: string;
  }>;

  constructor() {}

  ngOnInit() {
    this.boxForm.get('size').setValue(String(this.sizeOptions[0]));
    this.boxForm.get('backgroundColor').setValue(this.colorOptions[0]);
    this.boxForm.get('textColor').setValue(this.colorOptions[1]);
    this.boxForm
      .get('borderRadius')
      .setValue(String(this.borderRadiusOptions[0]));
    this.listenToInputChanges();
  }

  listenToInputChanges() {
    this.boxStyles$ = combineLatest([
      this.boxForm.get('size').valueChanges,
      this.boxForm.get('borderRadius').valueChanges,
      this.boxForm.get('backgroundColor').valueChanges,
      this.boxForm.get('textColor').valueChanges,
    ]).pipe(
      map(([size, borderRadius, backgroundColor, textColor]) => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor,
          color: textColor,
          borderRadius: `${borderRadius}px`,
        };
      })
    );
  }

  ngOnDestroy() {}
}
