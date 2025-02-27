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

  call!: any; 
  coin: Coin = { name: '', price: 0 };

  constructor(private priceService: PricefetcherService) { }

  ngOnInit(): void {  
    console.log("Booted Price Tracker");
    this.fetchPrice();
    // console.log(this.call, '==========================');
    // console.log(typeof(this.call));
    // this.bindJsonToModel(this.call);
    // console.log(this.coin);

  }

  fetchPrice(){
    this.priceService.fetchPrice().subscribe(
      (response) => {
        this.call = response;
        const coinKey = Object.keys(this.call)[0];
        this.coin.name = coinKey;
        this.coin.price = this.call.bitcoin.usd;
        console.log(this.coin, this.call, typeof(this.coin), typeof(this.call));
      }),
      (error: String) => {console.error(error);}      
  }

  //https://stackoverflow.com/questions/38319107/need-to-access-data-in-json-stringify-object

  // bindJsonToModel(object: object): void{
  //   console.log('binding');
  //   console.log(object);
  //   const priceString = JSON.stringify(object);
  //   const json = JSON.parse(priceString);

  //   this.coin.name = 'bitcoin';
  //   this.coin.price = json.get('price');

  // }


}
