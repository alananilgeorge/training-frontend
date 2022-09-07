import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  classVal: boolean = false;
  ngOnInit(): void {}
  clickBtn() {
    console.log('clicked', this.classVal);
    this.classVal = !this.classVal;
    console.log(this.classVal);
  }
}
