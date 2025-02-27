import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PriceTrackerComponent } from './components/price-tracker/price-tracker.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HistoryComponent,
    OverviewComponent,
    PriceTrackerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
