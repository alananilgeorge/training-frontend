import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  constructor(
    private blogservice: BlogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  blog: Blog = { title: '', body: '', author: '' };
  id!: number;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogservice.get(this.id);
  }

  onSave(data: any) {
    console.log(this.blogservice.blogs[this.id]);

    this.blogservice.edit(
      this.blogservice.blogs[this.id],
      data['title'],
      data['body'],
      data['author']
    );
    this.router.navigateByUrl('/');
  }
  delete() {
    this.blogservice.delete(this.id);
    this.router.navigateByUrl('/');
  }
}
