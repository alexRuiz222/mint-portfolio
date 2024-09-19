import { Component } from '@angular/core';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
})
export class MyJobsComponent {
  myJobs = [
    {
      company: 'EISEI - Tecnologico de Monterrey',
      date: '2023/Currently',
      position: 'Front End Developer',
      location: 'Monterrey, Nuevo León',
      remote: true,
      tools: [ 'Jira', 'Git', 'Microsoft Teams'],
      stack: ['HTML', 'CSS', 'Tailwind', 'Angular', 'JavaScript', 'Node.js'],
    },
    {
      company: 'Advancio',
      date: '2022/2023',
      position: 'Mid Front End Developer',
      location: 'Baja California México',
      remote: true,
      tools: ['Azure DevOps', 'Jira', 'Git', 'Microsoft Teams'],
      stack: ['HTML', 'CSS', 'Angular', 'JavaScript', 'Node.js'],
    },
    {
      company: 'DOMUS',
      date: '2027/2022',
      position: 'Full Stack Developer',
      location: 'Jalisco, México',
      remote: false,
      tools: ['Azure DevOps', 'Git', 'Google Meets'],
      stack: [
        'Angular',
        'Node.js',
        'MongoDB',
        'Express',
        'HTML',
        'CSS',
        'JavaScript',
        'Docker',
        'Redis',
        'Python',
      ],
    },
  ];
}
