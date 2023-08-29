import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterPathsService } from 'src/app/services/router-paths.service';

@Component({
  selector: 'app-horizontal-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent {
  currentPath: string = '';
  routes: Array<any> = [
    {
      title: 'Home',
      path: '/home',
      icon: 'home.svg',
    },
    {
      title: 'Jobs',
      path: '/jobs',
      icon: 'job.svg',
    },
    {
      title: 'My projects',
      path: '/projects',
      icon: 'bulb.svg',
    },
    {
      title: 'Certifies',
      path: '/certify',
      icon: 'certificate.svg',
    },
    {
      title: 'Mind Stack',
      path: '/mind-stack',
      icon: 'globe.svg',
    },
    {
      title: 'About me',
      path: '/about-me',
      icon: 'user.svg',
    },
  ];
  constructor(private routerSrv: RouterPathsService) {
    this.routerSrv.$path.subscribe((path: string) => {
      this.currentPath = path;
    });
  }
}
