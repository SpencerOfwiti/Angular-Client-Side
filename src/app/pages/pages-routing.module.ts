import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import {ProfileComponent} from "./profile/profile.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
