import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  items: Item[] = [
    {
      value: 2,
      col: 1,
      row: 1,
    },
    {
      value: 4,
      col: 2,
      row: 3,
    },
    {
      value: 8,
      col: 4,
      row: 3,
    },
    {
      value: 16,
      col: 1,
      row: 2,
    },
    {
      value: 32,
      col: 1,
      row: 3,
    },
    {
      value: 64,
      col: 1,
      row: 1,
    },
    {
      value: 128,
      col: 1,
      row: 1,
    },
    {
      value: 256,
      col: 1,
      row: 1,
    },
    {
      value: 512,
      col: 1,
      row: 1,
    },
    {
      value: 1024,
      col: 1,
      row: 1,
    },
    {
      value: 2048,
      col: 2,
      row: 4,
    },
  ];

  keyEventCodeMap: { [type: string]: string } = {
    ArrowRight: 'ArrowRight',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
  };

  colorMap: { [k: number]: string } = {
    2: '#626567',
    4: '#424949',
    8: '#7E5109',
    16: '#196f3d',
    32: '#138d75',
    64: '#154360',
    128: '#9b59b6',
    256: '#78281f',
    512: '#c0392b',
    1024: '#7d6608',
    2048: '#45b39d',
  };

  constructor() {}

  ngOnInit(): void {}

  getStyles(item: Item): { [p: string]: string } {
    const top = item.row * 110 - 100 + 'px';
    const left = item.col * 110 - 100 + 'px';

    return {
      top,
      left,
      'background-color': this.colorMap[item.value] || 'black',
    };
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    Object.keys(this.keyEventCodeMap).includes(event.code);
    console.log(this.keyEventCodeMap[event.code]);
  }
}
