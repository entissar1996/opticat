import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

const material:any= [
  MatButtonModule,
  MatIconModule,
  MatDividerModule

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
