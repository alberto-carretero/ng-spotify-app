import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnChanges {
  @Input() data: any[];

  constructor() { }

  /**
   * 
   * @param changes 
   * Detects changes made to the search
   */
  ngOnChanges(changes: SimpleChanges) {
    if(!changes.data.isFirstChange() && changes.data) {
      this.data = changes.data.currentValue;
    }
  }

}
