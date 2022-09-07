import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(public blogservice: BlogsService) {}
  blogs = this.blogservice.blogs;
  ngOnInit(): void {}
}
