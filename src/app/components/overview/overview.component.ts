import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from '../transactions/transaction.model';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent{

  @Input()
  transactions: Transaction[] = [];

  // ngOnChanges(changes: SimpleChanges): void {
      
  // }

  

}
