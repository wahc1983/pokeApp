import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


const routes: Routes = [
	{path: 'inicio' , component: PokemonGridComponent},
	{path: 'acerca' , component: AboutUsComponent},
	{path: 'pokemon-details/:name' , component: PokemonDetailsComponent},
	{path: '', pathMatch: 'full', redirectTo: 'inicio'},
	{path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
