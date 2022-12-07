import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ContactmeComponent,
  
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



