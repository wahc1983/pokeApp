import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.styl']
})
export class PokemonDetailsComponent implements OnInit {

	public name: string;
	public imageUrl: string;
	private pokemonDetails:any = [] ;


  constructor(private route: ActivatedRoute, private pokedex:PokedexService) { }

  ngOnInit(): void {
  	this.getPokemonName();
    console.log(this.name);
    this.getPokemonDetails(this.name);
  }

  getPokemonName() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name')
    });
  }

  getPokemonDetails(name: string) {
    this.pokedex.getpokemonbyname(name).then(() => {
  		this.pokemonDetails = this.pokedex.pokeInfotRes;
  		this.getImageUrl(this.pokemonDetails.id)
  		console.log(this.pokemonDetails)
  	});
  }

  get pokemon() {
  	return this.pokemonDetails;
  }

  getImageUrl(id:number) {
  	this.imageUrl = `${this.pokedex.getPokemonImage()}/${id}.png`;
  	console.log(this.imageUrl)
  }

}
