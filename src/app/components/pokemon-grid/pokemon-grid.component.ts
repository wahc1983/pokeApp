import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.styl']
})

export class PokemonGridComponent implements OnInit {

  private pokemonsInfo:any = [];
	public loading: boolean = false;
  
  @Input() pokeSearchModel:string;

  constructor(private pokedex:PokedexService) { }

  ngOnInit(): void {
  	this.loading = true;
  	this.getPokemonsList(1);
  }

  getPokemonsList(index:number) {
  	this.pokedex.getPokemonsByGen(index).then(() => {
			this.pokedex.pokeListRes.map((item:any) => {
  				this.pokedex.getpokemonbyname(item.name).then(() => {
  					this.pokemonsInfo.push(this.pokedex.pokeInfotRes);
  				});
  				this.loading = false;
  			});
  	});
  }

  get pokemons(){
  	return this.pokemonsInfo;
  }

}
