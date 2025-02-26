import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { Transaction } from '../transactions/transaction.model';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnChanges{

  @Input()
  transactions: Transaction[] = [];

  sum: number = 0;

  //https://stackoverflow.com/questions/50665905/angular-ngonchanges-method


  //https://angular.dev/api/core/OnChanges

  ngOnChanges(changes: SimpleChanges): void {
    console.log("New Entry Detected", changes);
  //https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array
    this.sum =  this.transactions.reduce((prev, current) => prev + current.amount, 0);
  }

  //https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array

}
