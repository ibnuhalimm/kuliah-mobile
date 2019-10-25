import { Injectable } from '@angular/core';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()

export class Config {
    public readonly apiArticleList: string = baseUrl + '/posts';
    public readonly apiArticleView: string = baseUrl + '/posts'; // Endpoint = /posts/:id
    public readonly apiArticleComments: string = baseUrl + '/comments?postId='; // Endpoint = /comments?postId={id}
}
