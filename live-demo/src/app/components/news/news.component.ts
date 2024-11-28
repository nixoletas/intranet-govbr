import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Import ActivatedRoute and Router
import { NewsItem } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./news.component.scss'],
  providers: [DatePipe]
})
export class NewsComponent implements OnInit {
  allNews: NewsItem[] = [];
  sortedNews: NewsItem[] = [];
  displayedNews: NewsItem[] = [];
  limit: number = 3; // Default number of news items to load at a time
  displayedNewsCount: number = 0;

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }


  constructor(
    private newsService: NewsService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {


    this.route.url.subscribe(urlSegments => {
      if (urlSegments.length > 0) {
        const currentRoute = urlSegments[0].path;
        if (currentRoute === 'noticias') {
          this.limit = 12; // Set limit to 12 for '/noticias' route
        } else if (currentRoute === 'home') {
          this.limit = 3; // Set limit to 3 for '/home' route
        }
      }
      this.loadNews();
    });
  }

  loadNews(): void {
    this.newsService.getNews().subscribe(response => {
      this.allNews = response.data;
      this.sortedNews = this.sortNewsByDate(this.allNews);
      this.displayedNewsCount = this.limit;
      this.displayedNews = this.allNews.slice(0, this.displayedNewsCount);
    });
  }

  loadMoreNews(): void {
    const remainingNews = this.allNews.length - this.displayedNewsCount;
    if (remainingNews > 0) {
      this.displayedNewsCount += this.limit;
      this.displayedNews = this.allNews.slice(0, this.displayedNewsCount);
    }
  }

  hasMoreNews(): boolean {
    return this.displayedNewsCount < this.allNews.length;
  }

  formatDate(dateString: string): { day: string | null, month: string | null } {
    const date = new Date(dateString);
    const day = this.datePipe.transform(date, 'dd');
    const month = this.datePipe.transform(date, 'MMM');
    return { day, month };
  }

  navigateToNoticias(): void {
    this.router.navigate(['/noticias']);
  }

  private sortNewsByDate(news: NewsItem[]): NewsItem[] {
    return news.sort((a, b) => new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime());
  }
}
function sort(allNews: NewsItem[]): NewsItem[] {
  throw new Error('Function not implemented.');
}

