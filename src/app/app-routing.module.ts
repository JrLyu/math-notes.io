import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }         from './home/home.component';
import { SubmitIconComponent } from './submit-icon/submit-icon.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DemosComponent } from './demos/demos.component';

// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'submit-icon', component: SubmitIconComponent },
  // …
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
