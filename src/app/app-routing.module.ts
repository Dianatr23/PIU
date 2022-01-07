import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AboutComponent} from "./components/about/about.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {MyAccountComponent} from "./components/my-account/my-account.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {MyProjectsComponent} from "./components/my-projects/my-projects.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProjectsInImplementationComponent} from "./components/projects-in-implementation/projects-in-implementation.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'my-projects',
    component: MyProjectsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'projects-in-implementation',
    component: ProjectsInImplementationComponent
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
