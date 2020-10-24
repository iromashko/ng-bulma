import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent,
    InputComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
