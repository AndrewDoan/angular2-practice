import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }         from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { DashboardComponent }   from './dashboard.component';
import { NavigationComponent }   from './navigation.component';
@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavigationComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
