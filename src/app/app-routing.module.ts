import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { YkComponent } from './yk/yk.component'
import { RealTimeMonitorComponent } from './real-time-monitor/real-time-monitor.component'
import { PositionComponent } from './position/position.component'
import { HistoryComponent } from './history/history.component'
import { CommandComponent } from './command/command.component'

const Routes:Routes = [
  {path:'yk-real-time-monitor', component:RealTimeMonitorComponent},
  {path:'yk-history', component:HistoryComponent},
  {path:'yk-position', component:PositionComponent},
  {path:'yk-command', component:CommandComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(Routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
