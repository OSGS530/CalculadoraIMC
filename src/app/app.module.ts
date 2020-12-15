import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { GuiComponent } from './gui/gui.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from "../services/storage.service";

@NgModule({
  declarations: [
    AppComponent,
    GuiComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
