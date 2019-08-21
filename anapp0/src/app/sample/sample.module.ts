import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AComponent, BComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    AComponent,
    BComponent
  ]
})
export class SampleModule { }
