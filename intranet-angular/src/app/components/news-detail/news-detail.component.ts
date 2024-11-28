import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsItem } from '../news/news.model';
import { NewsService } from '../news/news.service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, RouterModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  providers: [DatePipe]
})
export class NewsDetailComponent implements OnInit {

  instance: any;
  newsItem: NewsItem | any;
  fotos: string[] = []
  allNews: NewsItem[] = [];
  currentIndex: number = -1;
  fotoIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private datePipe: DatePipe,
  ) { }

  @ViewChild('carousel') carousel: any;

  ngOnInit(): void {
    this.newsService.getNews().subscribe(response => {
      this.allNews = response.data;
      const id = this.route.snapshot.paramMap.get('id');


      if (id) {
        console.log(this.newsItem?.attributes?.fotos?.data)
        this.currentIndex = this.allNews.findIndex(news => news.id === +id);
        this.loadNewsDetail(id);

      }
    });
  }


  loadNewsDetail(id: string | null): void {
    if (id) {
      this.newsService.getNewsById(id).subscribe((response) => {
        this.newsItem = response.data;
        console.log(this.newsItem)
        if (this.newsItem?.attributes?.fotos?.data) {
          this.fotos = this.newsItem.attributes.fotos.data.map((foto: any) => 'http://10.56.19.154' + foto.attributes.formats.small.url);
        }
      });
    }

  }

  formatDate(dateString: string): { day: string | null, month: string | null } {
    const date = new Date(dateString);
    const day = this.datePipe.transform(date, 'dd');
    const month = this.datePipe.transform(date, 'MMM');
    return { day, month };
  }

  loadNextNews(): void {
    if (this.currentIndex < this.allNews.length - 1) {
      const nextNewsId = this.allNews[this.currentIndex + 1].id;
      this.fotos = [];
      this.router.navigate(['/noticias', nextNewsId]);
      this.currentIndex++;
      this.loadNewsDetail(nextNewsId.toString());
      this.fotoIndex = 0;
    }
  }

  loadPreviousNews(): void {
    if (this.currentIndex > 0) {
      const prevNewsId = this.allNews[this.currentIndex - 1].id;
      this.fotos = [];
      this.router.navigate(['/noticias', prevNewsId]);
      this.currentIndex--;
      this.loadNewsDetail(prevNewsId.toString());
      this.fotoIndex = 0;
    }
  }

  prevSlide() {
    this.fotoIndex = (this.fotoIndex > 0) ? this.fotoIndex - 1 : this.fotos.length - 1;
  }

  nextSlide() {
    this.fotoIndex = (this.fotoIndex + 1) % this.fotos.length;
  }
}
