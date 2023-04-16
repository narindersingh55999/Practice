import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/demo.reducer';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [BrowserModule, FormsModule,StoreModule.forRoot({}),  StoreModule.forFeature('demoStore', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
