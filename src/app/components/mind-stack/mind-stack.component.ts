import { Component } from '@angular/core';

@Component({
  selector: 'app-mind-stack',
  templateUrl: './mind-stack.component.html',
  styleUrls: ['./mind-stack.component.scss'],
})
export class MindStackComponent {
  techStack = [
    {
      title: 'MongoDB',
      class: 'w-[23px]',
      url: 'assets/images/tech-logos/mongo.png',
      alt: 'MongoDB logo',
    },
    {
      title: 'Express',
      class: 'w-[35px]',
      url: 'assets/images/tech-logos/express.png',
      alt: 'Express logo',
    },
    {
      title: 'Angular',
      class: 'w-[40px]',
      url: 'assets/images/tech-logos/angular.png',
      alt: 'Angular logo',
    },
    {
      title: 'Node.js',
      class: 'w-[40px]',
      url: 'assets/images/tech-logos/node.png',
      alt: 'Node.js logo',
    },
  ];
}
