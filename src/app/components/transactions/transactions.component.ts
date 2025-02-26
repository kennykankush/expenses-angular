import { Component,EventEmitter,OnInit, Output, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from './transaction.model';

//https://angular.dev/guide/forms/reactive-forms

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  @Output()
  shoutTransactionToParents = new EventEmitter<Transaction>();

  entryClicked: boolean = false;
  transactionForm!: FormGroup;
  // transaction!: Transaction; redundant at Class Level, so i'll use it at scoped level

  private formBuilder = inject(FormBuilder); //OR constructor(private fb: FormBuilder) {};

  createForm(): FormGroup{
    return this.transactionForm = this.formBuilder.group({
      amount: [0],
      type: ['', [Validators.required]],
      category: ['', Validators.required],
      notes:['', Validators.required]
    })
  }

  clearForm(): void { //https://blog.nashtechglobal.com/handling-form-submission-form-reset-in-angular/
    console.log('Form has been resetted to default\nfrom:', this.transactionForm.value, '\nto :', this.createForm().value);
    this.transactionForm.reset(this.createForm().value);
  }

  resetView(): void {
    console.log(this.entryClicked);
    this.entryClicked = !this.entryClicked;
  }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    console.log('Filled Up: ', this.transactionForm.value)

    const transaction: Transaction = this.transactionForm.value;
    this.shoutTransactionToParents.emit(transaction);

    this.resetView();
    this.clearForm();
  }

  onReset(): void {
    this.clearForm();
  }

  onEntry(): void {
    this.resetView();
  }






  



}
