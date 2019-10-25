import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit, OnDestroy {

  idArticle: number;
  private idArticleSubs: any;
  private ArticleSubs: Subscription;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleSrv: ArticleService
  ) { }

  ngOnInit() {

    this.idArticleSubs = this.route.params.subscribe(params => {
      this.idArticle = +params.id;
    });

    this.ArticleSubs = this.articleSrv.articleSingleSubject.subscribe(article => {
      this.article = article;
    });

    this.articleSrv.getArticleById(this.idArticle);

  }


  ngOnDestroy() {
    this.idArticleSubs.unsubscribe();
    this.ArticleSubs.unsubscribe();
  }

}
