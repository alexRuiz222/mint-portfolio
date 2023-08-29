import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterPathsService {
  // currentPath: string = '';
  $path: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.$path.next(e.urlAfterRedirects);
      }
    });
  }

  get currentPath() {
    return this.$path.value;
  }
}
