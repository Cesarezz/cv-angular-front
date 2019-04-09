import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [BrowserModule],
  exports: [
              MatCardModule, 
              MatGridListModule
           ]
})
export class MaterialModule { }
