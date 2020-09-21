import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {Role} from "./_models";
import {AuthenticationService} from "./_services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Angular-Client-Side';
  isAdmin: boolean = false;
  currentUser: any;

  constructor(
    private authenticationService: AuthenticationService,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    this.isAdmin = this.authenticationService.isAdmin;
  }

  ngAfterViewInit(): void {
    let loader = this.renderer.selectRootElement('#preloader');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
