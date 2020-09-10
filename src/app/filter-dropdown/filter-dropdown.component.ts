import { Component } from '@angular/core';
import { MoviesStoreService } from '../store/movies/movies-store.service'

// enumeração com as opções de ordenação
enum FilterType {
  VoteCount = 'voteCount',
  Title = 'title',
}

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css']
})
export class FilterDropdownComponent  {
  // variável do tipo de ordenação, conforme enumeração.
  filterType: FilterType;
  
  // define utilização da store no construtor
  constructor(private moviesStore: MoviesStoreService) { }

  // método que altera a ordenação da store conforme opção selecionada
  onFilterChange(): void {
    switch (this.filterType) {
      case FilterType.VoteCount:
        this.moviesStore.filterByVoteCount();
        break;
      case FilterType.Title:
        this.moviesStore.filterByTitle();
        break;
    }
  }  

}
