import { ProductService } from './product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import IProduct from './product';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  filteredProducts: IProduct[] = [];
  showImage: boolean = true;
  pageTitle: string = "Polat's Product List";
  products: IProduct[] = [];
  filterInput: string = 'cart';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub: Subscription | undefined;

  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
  }

  ngOnInit(): void {
    this.sub = this._productService
      .getProducts()
      .pipe()
      .subscribe({
        next: (products) => (this.products = this.filteredProducts = products),
        error: (err) => (this.errorMessage = err),
      });
  }

  ngOnDestroy(): void {
    this.sub!.unsubscribe();
  }

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(this._listFilter);
    if (value === '') {
      this.filteredProducts = this.products;
    }
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  updateProduct(item: IProduct) {
    item.productName = 'Polat';
  }

  performFilter(value: string): IProduct[] {
    return this.products.filter((e: IProduct) => {
      return e.productName
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });
  }

  onRatingClicked(value: string): void {
    this.pageTitle = value;
  }

  onSelectionChanged(value: IProduct): void{
    console.log(value.productName);
  }
}
