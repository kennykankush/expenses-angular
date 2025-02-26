import { Component } from '@angular/core';
import { Transaction } from './components/transactions/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
    
  transactions: Transaction[] = [];

  receiving(childTransaction: Transaction){
    console.log('I have received from Transaction Component: ', childTransaction);
    // this.transactions.push(childTransaction);
    //https://stackoverflow.com/questions/65408155/problems-with-ngonchanges-when-updating-an-array 
    //Also, note that unless the reference to the array changes the above lifecycle hook will not get triggered. 
    // If you want the lifecycle hook to be triggered then change the reference each time you push an element to the array. 

    this.transactions = [...this.transactions, childTransaction];
  }



  


}
