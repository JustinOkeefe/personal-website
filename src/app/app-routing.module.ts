import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExamplesComponent } from './examples/examples/examples.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'About', component: AboutComponent, pathMatch: 'full' },
  {
    path: 'Examples',
    loadChildren: './examples/examples.module#ExamplesModule'
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
