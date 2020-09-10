import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieItem } from '../../services/movies-api.service'

@Injectable({
  providedIn: 'root',
})

// definição da store
export class MoviesStoreService {
  // definição das variáveis globais
  private readonly moviesSubject = new BehaviorSubject<IMovieItem[]>([]);
  readonly movies$ = this.moviesSubject.asObservable();

  // método que retorna o conteúdo da variável global
  private get movies(): IMovieItem[] {
    return this.moviesSubject.getValue();
  }

  // método que altera o conteúdo da variável global
  private set movies(value: IMovieItem[]) {
    this.moviesSubject.next(value);
  }

  // método que invoco o método responsável por alterar a variável global
  setMovies(movies: IMovieItem[]): void {
    this.movies = movies;
  }

  // método responsável por alterar a variável global de forma descendente pela contagem de votos
  filterByVoteCount(): void {
    this.movies = [...this.movies].sort((a, b) => b.vote_count - a.vote_count);
  }

  // método responsável por alterar a variável global de forma ascendente pelo título  
  filterByTitle(): void {
    this.movies = [...this.movies].sort((a, b) => a.title.localeCompare(b.title));
  }
}
