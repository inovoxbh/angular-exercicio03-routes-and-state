import { Component, OnInit } from '@angular/core';
import { MoviesApiService, IMoviesResult, IMovieItem } from '../../services/movies-api.service';
import { MoviesStoreService } from '../../store/movies/movies-store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  // um array com os filmes filtrados pelo usuário, cada um obedecendo o tipo/sintaxe de IMovieItem
  filteredMovies: Array<IMovieItem>;

  moviesFilter = '';
  
  // definição do serviço de busca de filmes e da store no construtor da classe
  constructor(private moviesApiService: MoviesApiService,public moviesStore: MoviesStoreService) {
  }

  // método executado a instanciar a classe, retorna "nada"
  ngOnInit(): void {
    // faz a chamada do serviço de busca de filmes populares
    this.moviesApiService.getPopular()
      // cria o observable contendo na variável moviesList a lista com os filmes retornados pela API, obedecendo o tipo/sintaxe de IMoviesResult
      .subscribe((moviesList: IMoviesResult) => {
        // guarda os filmes da API na store
        this.moviesStore.setMovies(moviesList.results);

        // num primeiro momento, inicializa o array de filmes filtrados com o retorno completo da API
        this.filteredMovies = moviesList.results;        
      });
  }

  // método responsável por filtrar os filmes conforme inputs do usuário, recebe como parâmetro de entrada a string digitada pelo usuário.
  onMoviesFilter(valueFilter: string): void {
    // altera a store conforme filmes filtrados
    this.moviesStore.setMovies(this.filteredMovies.filter((m) => m.title.toLowerCase().includes(valueFilter.toLowerCase())));
  }
}
