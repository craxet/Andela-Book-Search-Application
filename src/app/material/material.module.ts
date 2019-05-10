import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule, 
    CommonModule,
  ]
})
export class MaterialModule { }
