import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    QuestionaireComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgbModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
