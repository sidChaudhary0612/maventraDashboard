import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TimeSpentChartComponent } from './time-spent-chart/time-spent-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import{MatButtonModule} from '@angular/material/button'
import{MatDividerModule} from '@angular/material/divider'
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimeSpentChartComponent,
    SideNavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatDividerModule, FlexLayoutModule, MatIconModule, HttpClientModule,MatProgressBarModule,NgApexchartsModule,
    AppRoutingModule,MatBadgeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
