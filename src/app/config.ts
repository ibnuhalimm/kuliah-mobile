import { Injectable } from '@angular/core';

@Injectable()

export class Config {
    private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';

    public readonly apiDaftarArtikel: string = this.baseUrl + '/posts';
    public readonly apiViewArtikel: string = this.baseUrl + '/posts'; // Endpoint = /posts/:id
}
