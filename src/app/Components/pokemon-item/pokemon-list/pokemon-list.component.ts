import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit{

  currentPokemonName='';
  pokemonAdded=false;
  pokemons: Pokemon[]= [];
  showToast=false;
  deletedPokemonName?: string;

  onAddButtonClick(){
    this.pokemonAdded=true;
    this.pokemonService.addPokemon(this.currentPokemonName);
  }



  constructor(
    private pokemonService: PokemonService
  ) { 
  }
  
  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    console.log(this.pokemons);
  }
}
