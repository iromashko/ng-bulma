import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'game',
        component: GameComponent,
      },
    ]),
  ],
  exports: [GameComponent],
})
export class GameModule {}
