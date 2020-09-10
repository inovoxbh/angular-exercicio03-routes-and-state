import { Component, Input } from '@angular/core';
import { IMovieItem } from '../services/movies-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  // define que este componente recebe um parâmetro de entrada chamado movie do tipo IMovieItem.
  @Input() movie: IMovieItem;

  constructor() { }

}
