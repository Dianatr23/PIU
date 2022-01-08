import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  email: string | null = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('user');
    if (this.email !== null) {
      this.authenticated = true;
    }
  }

  goToAbout(): void {
    this.router.navigateByUrl('/about');
  }

  goToQuestions(): void {
    this.router.navigateByUrl('/questions');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  goToProjects(): void {
    this.router.navigateByUrl('/projects');
  }

  goToProjectInImplementation(): void {
    this.router.navigateByUrl('/projects-in-implementation');
  }

  goToMyProjects(): void {
    this.router.navigateByUrl('/my-projects')
  }

  goToMyAccount(): void {
    this.router.navigateByUrl('/my-account');
  }

  goToHelp(): void {
    this.router.navigateByUrl('/help');
  }

}
