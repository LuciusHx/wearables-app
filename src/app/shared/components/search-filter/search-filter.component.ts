import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SearchFilterComponent implements OnInit {
  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string[]>();
  @Output() filterApply = new EventEmitter<void>();

  categories = ['Camisetas', 'Calças', 'Acessórios'];
  selectedCategories: string[] = [];
  searchTerm: string = '';
  showResetButton: boolean = false;

  onSearchChange(event: any) {
    const term = event.target.value;
    this.searchChange.emit(term);
  }

  onCategoryChange(event: any) {
    this.selectedCategories = event.detail.value;
    this.categoryChange.emit(this.selectedCategories);
    this.checkFilters();
  }

  onFilterApply() {
    this.filterApply.emit();
  }

  resetFilters() {
    this.selectedCategories = [];
    this.searchTerm = '';
    this.showResetButton = false;

    // Emitir os valores resetados
    this.searchChange.emit('');
    this.categoryChange.emit([]);
  }

  private checkFilters() {
    // Mostra o botão se houver qualquer filtro ativo
    this.showResetButton =
      this.selectedCategories.length > 0 || !!this.searchTerm;
  }
  constructor(private utilsService: UtilsService) {}

  ngOnInit() {}
}
