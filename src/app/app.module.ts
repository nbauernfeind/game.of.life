import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';

import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CheckersComponent } from './checkers/checkers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent,
    TicTacToeComponent,
    CheckersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

