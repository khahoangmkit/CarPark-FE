import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showSideBar : boolean = true;

  constructor(
    private readonly router : Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.router.url, "url ====")
    if(this.router.url === "/auth/login") this.showSideBar = false;
  }

}
