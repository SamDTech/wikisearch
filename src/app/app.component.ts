import {Component} from '@angular/core';
import {SearchResult, WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pages: SearchResult[] = []

  constructor(private wikiService: WikipediaService) {
  }

  public onTerm(term: string) {
    this.wikiService.search(term).subscribe((pages: SearchResult[]) => {
      this.pages = pages;
    })

  }
}
