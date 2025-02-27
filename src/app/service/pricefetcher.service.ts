import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../components/price-tracker/coin.model';

//https://angular.dev/api/common/http/HttpClient

@Injectable({
  providedIn: 'root'
})
export class PricefetcherService {

  private apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
  private apiKey = 'CG-1pYcsyLA8J87v2gCHZwgD5XD'

  constructor(private httpClient: HttpClient) { }

  fetchPrice(): Observable<string> {
    const headers = new HttpHeaders().set('X-Auth-Token', this.apiKey);
    return this.httpClient.get<string>(this.apiUrl,  { headers });

  }


}
