import { Component, OnInit } from '@angular/core';
import { Coin } from './coin.model';
import { PricefetcherService } from '../../service/pricefetcher.service';

@Component({
  selector: 'app-price-tracker',
  standalone: false,
  templateUrl: './price-tracker.component.html',
  styleUrl: './price-tracker.component.css'
})
export class PriceTrackerComponent implements OnInit {

  call: any;

  constructor(private priceService: PricefetcherService) { }

  ngOnInit(): void {  
    this.fetchPrice();
    console.log("Booted Price Tracker");
  }

  fetchPrice() {
    this.priceService.fetchPrice().subscribe(
      (response) => {this.call = response}),
      (error: String) => {console.error(error);

      }
    console.log(typeof(this.call));
  }





}
