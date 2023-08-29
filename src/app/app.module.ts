import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './components/home/home.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertifyComponent } from './components/certify/certify.component';
import { MindStackComponent } from './components/mind-stack/mind-stack.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MyJobsComponent, ProjectsComponent, CertifyComponent, MindStackComponent, AboutMeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HorizontalMenuComponent,
    TitleComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
