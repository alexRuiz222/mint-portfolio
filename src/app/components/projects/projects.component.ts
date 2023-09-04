import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Nikola (Tesla Clone)',
      description:
        'I took the liberty of making a car page clone, to practice my vanilla javascript skills and learn Astro-build.  ',
      photoUrl: 'assets/images/apps-ss/nikola-ss.png',
      pageUrl: 'https://alexruiz-tesla-clone.netlify.app/',
      loaded: false,
      technologies: [
        { title: 'HTML', url: 'assets/images/tech-logos/html5.png' },
        { title: 'JavaScript', url: 'assets/images/tech-logos/javascript.png' },
        { title: 'CSS', url: 'assets/images/tech-logos/css3.png' },
        { title: 'Astro', url: 'assets/images/tech-logos/astro.svg' },
        { title: 'Tailwind', url: 'assets/images/tech-logos/tailwind.png' },
      ],
    },
    {
      title: 'My weather',
      description:
        'Stay informed about the weather conditions with a user-friendly interface and immersive visual experience.  ',
      photoUrl: 'assets/images/apps-ss/myWeather-ss.png',
      pageUrl: 'https://alexruiz-myweather.netlify.app/',
      loaded: false,
      technologies: [
        { title: 'Angular 16', url: 'assets/images/tech-logos/angular.png' },
        { title: 'Bootstrap 5', url: 'assets/images/tech-logos/bootstrap.png' },
        { title: 'HTML', url: 'assets/images/tech-logos/html5.png' },
        { title: 'JavaScript', url: 'assets/images/tech-logos/javascript.png' },
        { title: 'CSS', url: 'assets/images/tech-logos/css3.png' },
        { title: 'API', url: 'assets/images/tech-logos/api.png' },
      ],
    },
    {
      title: 'Portfolio 1.0',
      description:
        'This is my first portfolio website based on Spiderman video game.  ',
      photoUrl: 'assets/images/apps-ss/portfolio1-ss.png',
      pageUrl: 'https://alexruiz-portfolio.netlify.app/',
      loaded: false,
      technologies: [
        { title: 'Angular 16', url: 'assets/images/tech-logos/angular.png' },
        { title: 'Bootstrap 5', url: 'assets/images/tech-logos/bootstrap.png' },
        { title: 'HTML', url: 'assets/images/tech-logos/html5.png' },
        { title: 'JavaScript', url: 'assets/images/tech-logos/javascript.png' },
        { title: 'CSS', url: 'assets/images/tech-logos/css3.png' },
      ],
    },
  ];
}
