import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit, OnDestroy {

  private ArticleListSubs: Subscription;
  articleList: any[];


  constructor(
    private articleSrv: ArticleService
  ) { }

  ngOnInit() {

    this.ArticleListSubs = this.articleSrv.articleListSubject.subscribe((articles) => {
      this.articleList = articles;
    });

    this.articleSrv.getArticleList();

  }

  ngOnDestroy() {
    this.ArticleListSubs.unsubscribe();
  }


  viewArticle(articleId) {
    console.log(articleId);
  }

}
