import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IProduct from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  product: IProduct | undefined;
  sub: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.product = products.find((e) => e.productId === id);
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
