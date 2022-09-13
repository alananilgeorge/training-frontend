import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogsService } from '../blogs.service';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent implements OnInit {
  constructor(private blogservice: BlogsService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(data: any) {
    console.log(data);

    this.blogservice.create(data);
    this.router.navigateByUrl('/');
  }
}
