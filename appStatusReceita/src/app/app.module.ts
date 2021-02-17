import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from "primeng/fieldset";
import { HttpClientModule } from "@angular/common/http";
import { StatusComponent } from "./status/status.component";
import { StatusService } from "./status.service";
import { StatusEstadoComponent } from './status-estado/status-estado.component';
import { StatusEstadoDataComponent } from './status-estado-data/status-estado-data.component';
import { CalendarModule } from 'primeng/calendar';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {DataViewModule} from 'primeng/dataview';
import { EstadoIndisponibilidadeComponent } from './estado-indisponibilidade/estado-indisponibilidade.component';
import { MeuPipePipe } from './meu-pipe.pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, StatusComponent, StatusEstadoComponent, StatusEstadoDataComponent, EstadoIndisponibilidadeComponent, MeuPipePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    TableModule,
    FieldsetModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    DataViewModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'},
    StatusService, DatePipe],
    
  bootstrap: [AppComponent],
})
export class AppModule {}
