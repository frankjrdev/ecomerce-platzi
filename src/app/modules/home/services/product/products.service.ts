import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  getAllProducts$(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/products`);
  }
}
