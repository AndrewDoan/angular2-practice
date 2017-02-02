import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [ 
	BrowserModule, 
	MaterialModule.forRoot(),
	FormsModule,
	HttpModule,
	FlexLayoutModule.forRoot(),
  ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
