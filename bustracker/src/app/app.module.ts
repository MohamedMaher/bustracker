import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchtxtComponent } from './searchtxt/searchtxt.component';
import { LinetitleComponent } from './linepage/linetitle/linetitle.component';
import { LineComponent } from './linepage/line/line.component';
import { StudentsComponent } from './linepage/students/students.component';
import { CardComponent } from './linepage/card/card.component';
import { MapComponent } from './linepage/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchtxtComponent,
    LinetitleComponent,
    LineComponent,
    StudentsComponent,
    CardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
