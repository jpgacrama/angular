import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss'],
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type: SocialCardType;
  @ViewChild('vrf', { read: ViewContainerRef }) vrf: ViewContainerRef;
  cardTypes = SocialCardType;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.type.currentValue !== undefined) {
      console.log(`card type changed to: ${changes.type.currentValue}`);
    }
  }
}
