import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../../services/movies-api.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})

export class MovieDetailsPageComponent implements OnInit {
  movieDetail: any = {};

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.moviesService.getMovieDetails(params.id).subscribe(result => {
        this.movieDetail = result;
      });
    });
  }
}
