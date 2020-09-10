import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const withBaseUrl = path => `https://api.themoviedb.org/3/${path}?api_key=d416af5d4faee64e25ab001d87aab5c3`;

// define a sintaxe de um filme (suas respectivas propriedades) conforme características de retorno da API
export interface IMovieItem {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

// define a sintaxe do resultado da API de filmes: um array de filmes conforme interface definida acima.
export interface IMoviesResult {
  results: Array<IMovieItem>;
}

@Injectable({
  providedIn: 'root'
})

export class MoviesApiService {

  // instancia no construtor a função que permitirá a execução de chamadas HTTP
  constructor(private http: HttpClient) { }

  // método que irá buscar a lista dos filmes populares retornando um Observable
  getPopular(): Observable<any> {
    // busca a lista de filmes retornando um array do tipo IMoviesResult
    return this.http.get<IMoviesResult>(withBaseUrl('movie/popular'));
  }

}
