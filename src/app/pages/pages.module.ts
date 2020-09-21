import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [PagesComponent, BlogComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
