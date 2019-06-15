import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ForbiddenValidatorDirective } from './validators/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, // to use two-way data binding for form inputs
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
