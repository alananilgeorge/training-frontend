import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../match';
import { MatchApiService } from '../match-api.service';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';
import { SanitizeUrlPipe } from '../sanitize-url.pipe';
import { Video } from '../video';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css'],
})
export class RelatedComponent implements OnInit {
  constructor(
    private matchService: MatchApiService,
    private router: Router,
    private htmlSanitizer: SanitizeHtmlPipe,
    private urlSanitizer: SanitizeUrlPipe
  ) {}
  @Input() match!: Match;
  videos: any[] = [];
  ngOnInit(): void {
    this.match.videos.forEach((video) => {
      this.videos.push(
        this.htmlSanitizer.transform(this.urlSanitizer.transform(video.embed))
      );
    });
  }
  returnUrl() {
    return this.videos;
  }
}
