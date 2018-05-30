import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeightComponent } from './components/weight/weight.component';
import { HttpClientModule } from "@angular/common/http";

import { AddWeightComponent } from './components/add-weight/add-weight.component';
import { WeightService } from "./services/weight.service";

// Charts
import { ChartsModule } from 'ng2-charts';


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
  providers: [
    WeightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
