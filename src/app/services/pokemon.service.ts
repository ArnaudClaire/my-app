
import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

export interface Pokemon {
  id: number;
  name: string;
  sex: string;
}

@Injectable()
export class PokemonService {
  
  pokemons: Pokemon[] = [];
  
  constructor(private loggingService: LoggingService) {
    console.log("PokemonService constructor");
  }

  getPokemons() {
    return this.pokemons;
  }
   
  addPokemon(pokemonName: string) {
    this.loggingService.log("Ajout du pokemon "+pokemonName);
    this.pokemons.push({
      id: this.pokemons.length,
      name: pokemonName,
      sex: Math.random() >0.5?'male':'female'
    });
  }

  deletePokemon(pokemon: Pokemon) {
    const index = this.pokemons.indexOf(pokemon);
    console.table(this.pokemons);
    if (index > -1) {
      this.pokemons.splice(index, 1);
    }
  }

  updatePokemon(pokemon: Pokemon, newName: string) {
    const index = this.pokemons.indexOf(pokemon);
    this.loggingService.log("Modification du pokemon "+this.pokemons[index].name);
    this.pokemons[index].name = newName;
  }

  setSex(pokemon: Pokemon, newSex: string){
    const index = this.pokemons.indexOf(pokemon);
    switch(newSex){
      case 'M':
        this.pokemons[index].sex='male';
        break;
      case 'F':
        this.pokemons[index].sex='female';
        break;
      default:
        this.loggingService.log("Sexe inconnu");
        break;
    }
  }
}
