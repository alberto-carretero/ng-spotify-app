import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input('searchType') public searchType: string;
  @Output() public searchStr = new EventEmitter<string>();

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  searchMusic() {
    this.searchStr.emit(this.searchForm.value);
  }

}
