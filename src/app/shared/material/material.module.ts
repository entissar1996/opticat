import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import{MatSlideToggleModule}  from '@angular/material/slide-toggle';
import{MatSelectModule} from '@angular/material/select';
import{ MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const material:any= [
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressSpinnerModule

];

@NgModule({
  declarations: [],
  imports: [
    material,
    CommonModule
  ],
  exports:[material]
})
export class MaterialModule { }
