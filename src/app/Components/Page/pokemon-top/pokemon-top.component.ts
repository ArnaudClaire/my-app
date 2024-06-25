import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-top',
  templateUrl: './pokemon-top.component.html',
  styleUrl: './pokemon-top.component.scss'
})
export class PokemonTopComponent implements OnInit{
  currentPokemonName='';
  pokemons: Pokemon[]= [];
  showToast=false;
  showInput=false;
  updatedPokemon?: Pokemon | undefined;
  currentPokemon: Pokemon | undefined;

  onUpdatePokemon(){
    if(!this.updatedPokemon) return;
    this.pokemonService.updatePokemon(this.updatedPokemon, this.currentPokemonName);
  }

  handleUpdatePokemon(pokemon: Pokemon){
    console.log("update pokemon");
    this.updatedPokemon = pokemon;
    this.currentPokemonName = pokemon.name;
    this.currentPokemon=pokemon;
    this.showInput = true;
  }

  setSex(sexPokemon: 'M' | 'F'){
    if(this.currentPokemon) this.pokemonService.setSex(this.currentPokemon,sexPokemon);
  }

  constructor(
    private pokemonService: PokemonService
  ) { 
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons().slice(0,3);
    console.log(this.pokemons);
  }
}
