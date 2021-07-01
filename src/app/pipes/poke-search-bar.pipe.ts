import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeSearchBar'
})
export class PokeSearchBarPipe implements PipeTransform {

  transform(pokemons: any[], pokeSearchText: string): any[] {

    if (!pokemons) {
      return [];
    }
    
    if (!pokeSearchText) {
      return pokemons;
    }

    pokeSearchText = pokeSearchText.toLocaleLowerCase();

    return pokemons.filter( pokemon => {
    	return pokemon.name.toLocaleLowerCase().includes(pokeSearchText);
    });

  }
}
