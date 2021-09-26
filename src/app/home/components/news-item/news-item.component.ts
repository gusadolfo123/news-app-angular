import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/models/new.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input() item?: New;

  constructor() {}

  ngOnInit(): void {
    console.log(JSON.stringify(this.item));
  }
}
