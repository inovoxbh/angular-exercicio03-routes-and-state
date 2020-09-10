import { Component, Input } from '@angular/core';
import { IMovieItem } from '../services/movies-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  // define que este componente recebe um parâmetro de entrada chamado movies do tipo array de IMovieItem.
  @Input() movies: Array<IMovieItem>;
  
  constructor() { }
}
