import { Component, OnInit } from '@angular/core';
import {Project} from "../../domain/Project";
import {Router} from "@angular/router";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  item = new Project(
    "Umbrirea artificiala a locurilor de joaca",
    "assets/locuri-de-joaca.jpeg",
    "Marcel Pavel",
    "Creați umbră oriunde doriți cu parasolarul din HDPE de înaltă calitate. Este parasolarul ideal care poate fi utilizat într-o varietate de spații în aer liber, cum ar fi locurile de joacă.\n" +
    "\n" +
    "Fabricat din HDPE 100% (polietilenă de înaltă densitate), parasolarul vă va proteja de lumina directă a soarelui, este anti vânt cât și impermeabil. HDPE este special tratat, deci este anti mucegai și rezistent la razele UV.\n" +
    "\n" +
    "Parasolarul este ușor de asamblat datorită elementelor de fixare din oțel inoxidabil pe fiecare colț și a funiei incluse.",
    3000,
    "Agrement",
    2021,
    "15 Ianuarie 2022",
    "Ora 12:00",
    "Va astept intr-o discutie aprinsa despre proiectul pe care l-am propus. " +
    "Astept parerile voastre constructive. Oricine este binevenit");

  item2 = new Project(
    "Renovarea trotuarelor pietonale",
    "assets/locuri-de-joaca.jpeg",
    "Marcel Pavel",
    "Creați umbră oriunde doriți cu parasolarul din HDPE de înaltă calitate. Este parasolarul ideal care poate fi utilizat într-o varietate de spații în aer liber, cum ar fi locurile de joacă.\n" +
    "\n" +
    "Fabricat din HDPE 100% (polietilenă de înaltă densitate), parasolarul vă va proteja de lumina directă a soarelui, este anti vânt cât și impermeabil. HDPE este special tratat, deci este anti mucegai și rezistent la razele UV.\n" +
    "\n" +
    "Parasolarul este ușor de asamblat datorită elementelor de fixare din oțel inoxidabil pe fiecare colț și a funiei incluse.",
    3000,
    "Agrement",
    2021,
    "10 Februarie 2022",
    "Ora 10:00",
    "Va astept intr-o discutie aprinsa despre proiectul pe care l-am propus. " +
    "Astept parerile voastre constructive. Oricine este binevenit");

  item3 = new Project(
    "Crearea de noi parcari",
    "assets/locuri-de-joaca.jpeg",
    "Marcel Pavel",
    "Creați umbră oriunde doriți cu parasolarul din HDPE de înaltă calitate. Este parasolarul ideal care poate fi utilizat într-o varietate de spații în aer liber, cum ar fi locurile de joacă.\n" +
    "\n" +
    "Fabricat din HDPE 100% (polietilenă de înaltă densitate), parasolarul vă va proteja de lumina directă a soarelui, este anti vânt cât și impermeabil. HDPE este special tratat, deci este anti mucegai și rezistent la razele UV.\n" +
    "\n" +
    "Parasolarul este ușor de asamblat datorită elementelor de fixare din oțel inoxidabil pe fiecare colț și a funiei incluse.",
    3000,
    "Agrement",
    2022,
    "15 Martie 2022",
    "Ora 15:00",
    "Va astept intr-o discutie aprinsa despre proiectul pe care l-am propus. " +
    "Astept parerile voastre constructive. Oricine este binevenit");

  categories = ['Agrement', 'Infrastructura', 'Amenajare spatii publice'];
  years = ['2021', '2022'];
  budgets = ['<', '>', '='];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  selectChangeHandlerCategories(event: any): void {
    this.categories = event.target.value;
  }

  selectChangeHandlerYear(event: any): void {
    this.years = event.target.value;
  }

  selectChangeHandlerBudget(event: any): void {
    this.budgets = event.target.value;
  }

  goToProject(project: Project): void {
    localStorage.setItem('title', project.title);
    localStorage.setItem('description', project.description);
    localStorage.setItem('creator', project.creator);
    localStorage.setItem('budget', project.budget.toString());
    localStorage.setItem('image', project.photo);
    localStorage.setItem('category', project.category);
    localStorage.setItem('year', project.year.toString());
    localStorage.setItem('date', project.meetingDate);
    localStorage.setItem('hour', project.meetingHour);
    localStorage.setItem('meetingDescription', project.meetingDescription);
    this.router.navigateByUrl('/project');
  }
}
