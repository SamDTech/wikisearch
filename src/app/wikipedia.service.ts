import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface SearchResult {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}


interface WikipediaResponse {
  query: {
    search: SearchResult[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) {
  }

  public search(term: string): Observable<SearchResult[]> {
    return this.httpClient.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: true,
        srsearch: term,
        origin: '*'
      }
    }).pipe(map(value => value?.query?.search))
  }
}
