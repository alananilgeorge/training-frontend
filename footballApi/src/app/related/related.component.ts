import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../match';
import { MatchApiService } from '../match-api.service';
import { Video } from '../video';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css'],
})
export class RelatedComponent implements OnInit {
  constructor(private matchService: MatchApiService, private router: Router) {}
  @Input() match!: Match;
  viewVideo(id: string) {
    this.router.navigateByUrl('view-video/{{id}}');
  }
  ngOnInit(): void {}
}
