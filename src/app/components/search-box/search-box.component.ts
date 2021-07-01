import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.styl']
})
export class SearchBoxComponent implements OnInit {

	@Input() pokeSearchModel;

	@Output() pokeSearchModelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updatePokeListModel(value) {
  	this.pokeSearchModelChange.emit(value);
  }

}
