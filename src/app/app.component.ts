import {Component, OnInit} from '@angular/core';
import {Role} from "./_models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-Client-Side';
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser !== null) {
      this.isLoggedIn = true;
      if (this.currentUser.role === Role.Admin) {
        this.isAdmin = true;
      }
    }
    console.log(this.currentUser);
  }
}
