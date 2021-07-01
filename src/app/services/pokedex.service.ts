import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

	pokeUrl:string = environment.pokeUrlBase;
  pokeUrlImg:string = environment.pokeUrlImgBase;
	pokeListRes:Object[];
	pokeInfotRes:Object[];
	loading: boolean;

  constructor(private http: HttpClient) {
  	this.pokeListRes = [];
  	this.pokeInfotRes = [];
  	this.loading = false;
  }

  /*
  * obtener todos los pokémons por generacion
  */

  getPokemonsByGen(index:Number) {

  	return new Promise((resolve, reject) => {
  		let apiURL = `${this.pokeUrl}/generation/${index}`;
  		this.http.get<any>(apiURL).toPromise()
  		.then(res => {
  			this.pokeListRes = res.pokemon_species;  			
  			resolve();
  		}),
  		msg => {
  			console.log(msg);
  			reject(msg);
  		};
  	});
  }

  /*
  * obtener los datos de un pokémon por nombre
  */

  getpokemonbyname(name:String) {

    return new Promise((resolve, reject) => {
  		let apiURL = `${this.pokeUrl}/pokemon/${name}`;
  		this.http.get<any>(apiURL).toPromise()
  		.then(res => {
  			this.pokeInfotRes = res;
  			resolve();
  		}),
  		msg => {
  			console.log(msg);
  			reject(msg);
  		};
  	});	
  }

  getPokemonImage() {
    console.log(this.pokeUrlImg)
    return this.pokeUrlImg;
  }

}
