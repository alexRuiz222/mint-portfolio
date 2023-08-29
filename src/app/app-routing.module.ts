import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertifyComponent } from './components/certify/certify.component';
import { MindStackComponent } from './components/mind-stack/mind-stack.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' },
  },
  {
    path: 'jobs',
    component: MyJobsComponent,
    data: { animation: 'Jobs' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'certify',
    component: CertifyComponent,
  },
  {
    path: 'mind-stack',
    component: MindStackComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
