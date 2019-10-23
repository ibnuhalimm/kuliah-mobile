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
}
