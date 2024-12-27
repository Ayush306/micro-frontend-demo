import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    // PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    FormsModule,
    MatDialogModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
