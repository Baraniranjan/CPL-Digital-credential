import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = 'Angular';
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
