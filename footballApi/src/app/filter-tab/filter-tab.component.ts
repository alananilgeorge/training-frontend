import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchApiService } from '../match-api.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
})
export class FilterTabComponent implements OnInit {
  constructor(private matchApi: MatchApiService) {}
  date: Date = new Date();
  currentMatches: Match[] = this.matchApi.viewMatches;
  leagueFilter = new FormControl('all');
  dateFilter = new FormControl('2');
  ngOnInit(): void {
    console.log(this.date.toISOString());
  }
  filter() {
    console.log(this.dateFilter.value, this.leagueFilter.value);
    if (this.leagueFilter.value == 'all') {
      this.matchApi.viewMatches = this.matchApi.allMatches.response;
    } else {
      this.matchApi.viewMatches = this.matchApi.allMatches.response.filter(
        (match) => match.competition == this.leagueFilter.value
      );
    }
    if (this.dateFilter.value == '1') {
      this.matchApi.viewMatches = this.matchApi.viewMatches.filter(
        (match) => match.date < this.date.toISOString()
      );
    }
    if (this.dateFilter.value == '2') {
      this.matchApi.viewMatches = this.matchApi.viewMatches.filter(
        (match) =>
          match.date.slice(0, 10) == this.date.toISOString().slice(0, 10)
      );
    }
    if (this.dateFilter.value == '3') {
      this.matchApi.viewMatches = this.matchApi.viewMatches.filter(
        (match) => match.date > this.date.toISOString()
      );
    }
  }
  // filterMatches(filterTerm: string) {
  //   if (filterTerm != 'all') {
  //     this.currentMatches = this.matchApi.viewMatches;
  //     this.matchApi.viewMatches = this.matchApi.allMatches.response.filter(
  //       (li) => li.competition == filterTerm
  //     );
  //   } else {
  //     this.matchApi.viewMatches = this.matchApi.allMatches.response;
  //   }
  //   console.log(this.matchApi.viewMatches, this.currentMatches);
  // }
  // filterMatchesByDate(ch: number) {
  //   this.currentMatches = this.matchApi.viewMatches;
  //   if (ch == 1)
  //     this.matchApi.viewMatches = this.currentMatches.filter(
  //       (match) => match.date < this.date.toISOString()
  //     );

  //   if (ch == 2)
  //     this.matchApi.viewMatches = this.currentMatches.filter(
  //       (match) =>
  //         match.date.toString().slice(0, 10) ==
  //         this.date.toISOString().slice(0, 10)
  //     );

  //   if (ch == 3)
  //     this.matchApi.viewMatches = this.currentMatches.filter(
  //       (match) => match.date > this.date.toISOString()
  //     );
  //   console.log(this.matchApi.viewMatches, this.currentMatches);
  // }
}
