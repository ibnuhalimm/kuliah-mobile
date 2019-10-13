import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toAddProduct = () => {
    this.router.navigate(['product-add']);
  }

}
