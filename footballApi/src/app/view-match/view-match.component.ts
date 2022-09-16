import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Match } from '../match';
import { MatchApiService } from '../match-api.service';

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.css'],
})
export class ViewMatchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private matchService: MatchApiService
  ) {}
  match!: Match;
  matchId!: string;
  score!: string;
  teams: string[] = [];
  matchDate!: Date;
  today = new Date();
  ngOnInit(): void {
    this.matchId = String(this.route.snapshot.paramMap.get('id'));
    console.log(this.matchId);

    this.match = this.matchService.viewMatches.filter(
      (match) => match.title === this.matchId
    )[0];
    console.log(this.today);
    this.score = this.match.videos[0].title.slice(0, 3);
    this.teams = this.match.title.split('-');
  }
}
