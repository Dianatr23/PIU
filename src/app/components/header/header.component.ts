import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  admin = false;
  email: string | null = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('user');
    if(this.email === 'diana_trifu@yahoo.com'){
    //if (this.email !== null && this.email !== '') {
      this.authenticated = true;
      this.admin = false;
    }
    else if(this.email === 'paula_dan@yahoo.com'){
      this.authenticated = false;
      this.admin = true;
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

  goToCheckProjects(): void{
    this.router.navigateByUrl('/new-projects');
  }

}
