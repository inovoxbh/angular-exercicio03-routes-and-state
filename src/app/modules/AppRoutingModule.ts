import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../views/home-page/home-page.component'
import { MovieDetailsPageComponent } from '../views/movie-details-page/movie-details-page.component'

// definição das rotas da aplicação
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movie/:id', component: MovieDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
