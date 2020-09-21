import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LeftSidebarComponent, RightSidebarComponent, TopbarComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    RightSidebarComponent,
    TopbarComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
