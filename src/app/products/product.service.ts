import { Injectable } from '@angular/core';
import IProduct from './product';
import ProductData from '../../api/products/products.json';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, filter, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {
  }

  products: IProduct[] = ProductData;

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is :${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
