import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    NgbPaginationModule, 
    NgbAlertModule

    
  ],
  exports: [
    CommonModule,
    MatCardModule,
    NgbPaginationModule, 
    NgbAlertModule
  ]
})
export class MaterialModule { }
