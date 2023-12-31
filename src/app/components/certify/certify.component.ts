import { Component } from '@angular/core';

@Component({
  selector: 'app-certify',
  templateUrl: './certify.component.html',
  styleUrls: ['./certify.component.scss'],
})
export class CertifyComponent {
  certificates: any[] = [
    {
      title: 'Angular (Intermediate)',
      company: 'HackerRank',
      course: false,
      monthNumber: 6,
      month: 'Jun',
      year: 2023,
      link: 'https://www.hackerrank.com/certificates/iframe/c5b1c214d3dc1',
      img: 'assets/images/tech-logos/angular.png',
    },
    {
      title: 'Angular con un café',
      company: 'LinkedIn',
      course: true,
      monthNumber: 5,
      month: 'May',
      year: 2023,
      link: 'https://www.linkedin.com/learning/certificates/829958804acadc5fc57fcfb01faf34e6db070cb6c6027e1b497a17bf6d45f0a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqpL4Wd%2FKRyODFUj26BYmhg%3D%3D',
      img: 'assets/images/tech-logos/angular.png',
    },
    {
      title: 'JavaScript',
      company: 'Sololearn',
      course: true,
      monthNumber: 9,
      month: 'Sep',
      year: 2022,
      link: 'https://www.sololearn.com/certificates/CT-DQDAOPMH',
      img: 'assets/images/tech-logos/javascript.png',
    },
    {
      title: 'Angular (Basic)',
      company: 'HackerRank',
      course: false,
      monthNumber: 6,
      month: 'Jun',
      year: 2022,
      link: 'https://www.hackerrank.com/certificates/c4895ceb99ae',
      img: 'assets/images/tech-logos/angular.png',
    },
    {
      title: 'Python (Basic)',
      company: 'HackerRank',
      course: false,
      monthNumber: 6,
      month: 'Jun',
      year: 2022,
      link: 'https://www.hackerrank.com/certificates/25873ef3bb46',
      img: 'assets/images/tech-logos/python.png',
    },

    {
      title: 'Node: De cero a experto',
      company: 'Udemy',
      course: true,
      monthNumber: 6,
      month: 'Jun',
      year: 2021,
      link: 'https://www.udemy.com/certificate/UC-df8f4d56-9b1e-41ac-b240-30a3af132e60/',
      img: 'assets/images/tech-logos/node.png',
    },
  ];
}
