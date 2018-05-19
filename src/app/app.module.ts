import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeightComponent } from './components/weight/weight.component';
import { HttpClientModule } from "@angular/common/http";

// Charts
import { ChartsModule } from 'ng2-charts';
import { AddWeightComponent } from './components/add-weight/add-weight.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    AddWeightComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
