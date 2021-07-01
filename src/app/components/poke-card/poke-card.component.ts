import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.styl']
})
export class PokeCardComponent implements OnInit {

	@Input() pokemon:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
