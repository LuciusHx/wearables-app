import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { SearchFilterComponent } from 'src/app/shared/components/search-filter/search-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SharedModule, SearchFilterComponent],
})
export class HomePage implements OnInit {
  products: Product[] = [
    {
      name: 'Jaqueta Puma',
      price: 'R$7.000,00',
      stock: 3,
      sizes: ['P', 'M', 'G'],
      seller: 'Lucius',
      category: 'Camisetas',
    },
    {
      name: 'Camisa Nike',
      price: 'R$2.000,00',
      stock: 2,
      sizes: ['P', 'M', 'G'],
      seller: 'Luan',
      category: 'Calças',
    },
    {
      name: 'Bermuda Adidas',
      price: 'R$1.000,00',
      stock: 2,
      sizes: ['P', 'M', 'G'],
      seller: 'Lucius',
      category: 'Camisetas',
    },
    {
      name: 'Bermuda Adidas',
      price: 'R$1.000,00',
      stock: 2,
      sizes: ['P', 'M', 'G'],
      seller: 'Lucius',
      category: 'Acessórios',
    },
  ];

  // ========= filtro =========
  filteredProducts = [...this.products];
  searchTerm = '';
  selectedCategories: string[] = [];

  handleSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  handleCategoryChange(categories: string[]) {
    this.selectedCategories = categories;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch =
        !this.searchTerm ||
        product.name.toLowerCase().includes(this.searchTerm) ||
        product.seller.toLowerCase().includes(this.searchTerm) ||
        product.category.toLowerCase().includes(this.searchTerm);

      const matchesCategory =
        this.selectedCategories.length === 0 ||
        this.selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }
  constructor() {}

  ngOnInit() {
    this.applyFilters();
  }
}
