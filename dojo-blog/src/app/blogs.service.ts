import { Injectable } from '@angular/core';
import { Blog } from './blog';
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  blogs: Blog[] = [];

  constructor() {}
  // getAll(): Blog[] {
  //   return this.blogs;
  // }
  get(id: number) {
    return this.blogs[id];
  }
  getId(blog: Blog) {
    return this.blogs.indexOf(blog);
  }
  create(blog: Blog) {
    this.blogs.push(blog);
  }
  edit(blog: Blog, title: string, body: string, author: string) {
    blog.title = title;
    blog.body = body;
    blog.author = author;
  }
  delete(id: number) {
    this.blogs = this.blogs.splice(id, 1);
    console.log(this.blogs);
  }
}
