import { Component, OnInit } from '@angular/core';
import { MatchApiService } from '../match-api.service';

@Component({
  selector: 'filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
})
export class FilterTabComponent implements OnInit {
  constructor(private matchApi: MatchApiService) {}
  filterMatches(filterTerm: string) {
    if (filterTerm != 'all') {
      this.matchApi.viewMatches = this.matchApi.allMatches.response.filter(
        (li) => li.competition == filterTerm
      );
    } else {
      this.matchApi.viewMatches = this.matchApi.allMatches.response;
    }
  }
  ngOnInit(): void {}
}
