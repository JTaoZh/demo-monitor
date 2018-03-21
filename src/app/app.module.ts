import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ElModule } from 'element-angular';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from './/app-routing.module';
import { RealTimeMonitorComponent } from './real-time-monitor/real-time-monitor.component';
import { YkComponent } from './yk/yk.component';
import { HistoryComponent } from './history/history.component';
import { PositionComponent } from './position/position.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    RealTimeMonitorComponent,
    YkComponent,
    HistoryComponent,
    PositionComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
