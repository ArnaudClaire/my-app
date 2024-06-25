import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { Pokemon, PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
})
export class PokemonItemComponent{
  @Input() pokemon?: Pokemon;
  // @Output() deletePokemon = new EventEmitter<string>();
  @Input() action?: string;
  @Output() updatePokemon = new EventEmitter<Pokemon>();

  constructor(private loggingService: LoggingService, private pokemonService: PokemonService) { 
    this.loggingService.log("Pokemon item constructeur");
  }

  onDeletePokemon(){
    if(!this.pokemon) return;
    this.pokemonService.deletePokemon(this.pokemon);
  }

  onUpdatePokemon(){
    console.log("update pokemon");
    // if(!this.pokemon) return;
    // this.pokemonService.updatePokemon(this.pokemon.id-1,"coco");
    if(this.pokemon) this.updatePokemon.emit(this.pokemon);
  }
}
