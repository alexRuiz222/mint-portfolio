import { Component, OnInit } from '@angular/core';
import { RouterPathsService } from './services/router-paths.service';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = 'mint-portfolio';
  svgInTop = '-100px';
  svgInLeft = '100%';
  svgWidth = '250px';
  svgHeight = '250px';
  currentRoute: string = '';

  constructor(private routerSrv: RouterPathsService) {}

  ngOnInit(): void {
    this.routerSrv.$path.subscribe((path: string) => {
      this.currentRoute = path;
      switch (this.currentRoute) {
        case '/home':
          this.svgInTop = '-100px';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '250px';
          break;
        case '/jobs':
          this.svgInTop = 'calc(100% - 150px)';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '250px';
          break;
        case '/projects':
          this.svgInTop = 'calc(100% - 150px)';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '250px';
          break;
        case '/certify':
          this.svgInTop = '-100px';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '250px';
          break;
        case '/mind-stack':
          this.svgInTop = 'calc(50% - 150px)';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '250px';
          break;

        case '/about-me':
          this.svgInTop = 'calc(60% - 50px)';
          this.svgInLeft = 'calc(100% - 150px)';
          this.svgWidth = '250px';
          this.svgHeight = '550px';
          break;
      }
    });
  }
}
