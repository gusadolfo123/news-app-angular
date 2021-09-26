import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news: New[] = [
    {
      title: 'Prueba 1',
      description: 'asdasd',
    },
    {
      title: 'Prueba 2',
      description: 'asdasd',
    },
    {
      title: 'Prueba 3',
      description: 'asdasd',
    },
    {
      title: 'Prueba 4',
      description: 'asdasd',
    },
    {
      title: 'Prueba 5',
      description: 'asdasd',
    },
    {
      title: 'Prueba 6',
      description: 'asdasd',
    },
  ];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => {
      this.news = news;
    });
  }
}
