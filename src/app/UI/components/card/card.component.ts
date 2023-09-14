import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() selected = false;
  @Input() activeHover = false;
  constructor() {}

  ngOnInit(): void {}
}
