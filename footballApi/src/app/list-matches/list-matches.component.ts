import { Component, OnInit } from '@angular/core';
import { MatchApiService } from '../match-api.service';
import { Router } from '@angular/router';
import { Match } from '../match';
@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css'],
})
export class ListMatchesComponent implements OnInit {
  object!: any;
  filterTerm: string = '';

  constructor(public matchService: MatchApiService, private router: Router) {
    this.matchService.getData().subscribe((data) => {
      this.matchService.allMatches = data;
      this.matchService.viewMatches = this.matchService.allMatches.response;
      console.log(typeof data.response[0].date);
    });
  }
  ngOnInit(): void {}
  matchClick(match: Match) {
    this.router.navigateByUrl('/view-match/' + match.title);
  }
}
// this.matchService.allMatches.response.filter(
//   (li) => li.competition == 'ENGLAND: Premier League'
// );
