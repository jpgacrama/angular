import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { APP_CONFIG } from '../constants/app-config';
import { AdminConfig } from './constants/admin-config';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AdminConfig,
    },
  ],
})
export class AdminModule {}
