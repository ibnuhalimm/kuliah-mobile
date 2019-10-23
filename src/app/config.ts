import { Injectable } from '@angular/core';

@Injectable()

export class Config {
    private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';

    public readonly apiArticleList: string = this.baseUrl + '/posts';
    public readonly apiArticleView: string = this.baseUrl + '/posts'; // Endpoint = /posts/:id
}
