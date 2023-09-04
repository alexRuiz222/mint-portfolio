import { Component, HostListener, OnInit } from '@angular/core';
import { RouterPathsService } from './services/router-paths.service';
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
  screenWidth: number;

  constructor(private routerSrv: RouterPathsService) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.routerSrv.$path.subscribe((path: string) => {
      this.currentRoute = path;

      this.resizeElements();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    this.resizeElements();
  }

  resizeElements() {
    switch (this.currentRoute) {
      case '/home':
        this.svgInTop = '-100px';
        this.svgInLeft = 'calc(100% - 150px)';
        this.svgWidth = '250px';
        this.svgHeight = '250px';
        break;
      case '/jobs':
        this.svgInTop = 'calc(100% - 200px)';
        this.svgInLeft = '-10%';
        this.svgWidth = '350px';
        this.svgHeight = '350px';
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
    this.svgWidth = this.screenWidth < 768 ? '250px' : this.svgWidth;
    this.svgHeight = this.screenWidth < 768 ? '250px' : this.svgHeight;
  }
}
