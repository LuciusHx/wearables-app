import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class HomePage implements OnInit {
  parts = ['Todas as peças', 'Shorts', 'Camisetas', 'Calças', 'Sapatos'];

  products: Product[] = [
    {
      name: 'Jaqueta Puma',
      price: 'R$7.000,00',
      stock: 3,
      sizes: ['P', 'M', 'G'],
      seller: 'Lucius',
    },
    {
      name: 'Camisa Nike',
      price: 'R$2.000,00',
      stock: 2,
      sizes: ['P', 'M', 'G'],
      seller: 'Luan',
    },
    {
      name: 'Bermuda Adidas',
      price: 'R$1.000,00',
      stock: 2,
      sizes: ['P', 'M', 'G'],
      seller: 'Lucius',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
