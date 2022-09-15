import { Component, OnInit } from '@angular/core';
import { MatchApiService } from '../match-api.service';
import { Router } from '@angular/router';
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
    });
  }
  ngOnInit(): void {}
  getMatches() {
    console.log(this.matchService.allMatches.response);
  }
  onClick() {
    console.log(this.matchService.allMatches);
  }
  matchClick() {
    this.router.navigateByUrl('/view-match/{{id}}');
  }
}
// this.matchService.allMatches.response.filter(
//   (li) => li.competition == 'ENGLAND: Premier League'
// );
