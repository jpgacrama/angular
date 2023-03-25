import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BucketService } from 'src/app/services/bucket.service';
import { Fruit } from '../../../constants/fruit';
import { IFruit } from '../../../interfaces/fruit.interface';
import { IAppConfig, APP_CONFIG } from 'src/app/constants/app-config';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent implements OnInit {
  $bucket: Observable<IFruit[]>;
  selectedFruit: Fruit | null = null;
  fruits: string[] = Object.values(Fruit);
  canDeleteItems: boolean;
  @Inject(APP_CONFIG) private config: IAppConfig;
  constructor(private bucketService: BucketService) {}

  ngOnInit(): void {
    this.$bucket = this.bucketService.$bucket;
    this.bucketService.loadItems();
    this.canDeleteItems = this.config.canDeleteItems;
  }

  addSelectedFruitToBucket() {
    if (this.selectedFruit !== null) {
      this.bucketService.addItem({
        id: Date.now(),
        name: this.selectedFruit!,
      });
    }
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }
}
