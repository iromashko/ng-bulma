import { Component, OnInit } from '@angular/core';
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
      col: 1,
      row: 1,
    },
    {
      value: 8,
      col: 1,
      row: 1,
    },
    {
      value: 16,
      col: 1,
      row: 1,
    },
    {
      value: 32,
      col: 1,
      row: 1,
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

  constructor() {}

  ngOnInit(): void {}

  public getStyles(item: Item): { [p: string]: string } {
    const top = item.row * 110 - 100 + 'px';
    const left = item.row * 110 - 100 + 'px';

    return { top, left, 'background-color': 'brown' };
  }
}
