import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllCategories$(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/categories`);
  }
}

