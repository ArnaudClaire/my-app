import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonItemComponent } from './Components/pokemon-item/pokemon-item.component';

import { HighLightBackgroundColorDirective } from './directives/high-light-background-color.directive';
import { LoggingService } from './services/logging.service';

import { PokemonTopComponent } from './Components/Page/pokemon-top/pokemon-top.component';
import { PokemonListComponent } from './Components/pokemon-item/pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    HighLightBackgroundColorDirective,
    PokemonTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    LoggingService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
