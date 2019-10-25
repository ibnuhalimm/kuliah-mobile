import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleListSubject = new Subject<string[]>();
  articleSingleSubject = new Subject<string[]>();

  constructor(
    private config: Config,
    private http: HttpClient
  ) { }


  getArticleList() {
    this.http.get<any>(this.config.apiArticleList)
            .pipe(map(results => {
              return results;
            }))
            .subscribe(resData => {
              this.articleListSubject.next(resData);
            });
  }


  getArticleById(id: number) {
    this.http.get<any>(this.config.apiArticleView + '/' + id)
            .pipe(map(results => {
              return results;
            }))
            .subscribe(resData => {
              this.articleSingleSubject.next(resData);
            });
  }

}
