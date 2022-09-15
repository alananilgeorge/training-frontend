import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponse } from './api-response';

import { Match } from './match';

@Injectable({
  providedIn: 'root',
})
export class MatchApiService {
  constructor(private matches: HttpClient) {}
  allMatches!: ApiResponse;
  viewMatches!: Match[];
  _url: string =
    'https://www.scorebat.com/video-api/v3/feed/?token=MjY5OThfMTY2MzE0MDEzMV85ZjYwMmNlYTlhOWEwODM3ZTg1MDkwODQyZWEwMGM4YmQwZjM4Y2Rj';
  getData() {
    return this.matches.get<ApiResponse>(this._url);
  }
}
