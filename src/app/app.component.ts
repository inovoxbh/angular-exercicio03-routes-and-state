import { Component, OnInit } from '@angular/core';
import { MoviesApiService, IMoviesResult, IMovieItem } from './services/movies-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // um título qualquer 
  title = 'angular-exercicio-two';
  
  // um array com todos os filmes retornados pela API, cada um obedecendo o tipo/sintaxe de IMovieItem
  movies: Array<IMovieItem>;
  
  // um array com os filmes filtrados pelo usuário, cada um obedecendo o tipo/sintaxe de IMovieItem
  filteredMovies: Array<IMovieItem>;

  moviesFilter = '';
  
  // definição do serviço de busca de filmes no construtor da classe
  constructor(private moviesApiService: MoviesApiService) {}

  // método executado a instanciar a classe, retorna "nada"
  ngOnInit(): void {
    // faz a chamada do serviço de busca de filmes populares
    this.moviesApiService.getPopular()
      // cria o observable contendo na variável moviesList a lista com os filmes retornados pela API, obedecendo o tipo/sintaxe de IMoviesResult
      .subscribe((moviesList: IMoviesResult) => {
        // guarda todos os filmes
        this.movies = moviesList.results;
        
        // num primeiro momento, inicializa o array de filmes filtrados com o retorno completo da API
        this.filteredMovies = this.movies;
      });
  }

  // método responsável por filtrar os filmes conforme inputs do usuário, recebe como parâmetro de entrada a string digitada pelo usuário.
  onMoviesFilter(valueFilter: string): void {
    /* array de filmes filtrados recebe o array com todos os filmes fazendo o 
       filtro (filter) onde m.title contém o valor filtrado pelo usuário, com devido tratamento case sensitive. */
    this.filteredMovies = this.movies.filter(m => m.title.toLowerCase().includes(valueFilter.toLowerCase()));
  }
}
