import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule  } from '@angular/forms';


import { AppComponent } from './app.component';
// Import your library
import { AmexioWidgetModule,CommonHttpService } from 'amexio-ng-extensions';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    FormsModule
  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
