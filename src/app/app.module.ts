import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule , RouteComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
