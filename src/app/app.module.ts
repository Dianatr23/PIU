import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsInImplementationComponent } from './components/projects-in-implementation/projects-in-implementation.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { HelpComponent } from './components/help/help.component';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './components/project/project.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    QuestionsComponent,
    RegisterComponent,
    ProjectsComponent,
    ProjectsInImplementationComponent,
    MyAccountComponent,
    MyProjectsComponent,
    ProjectCardComponent,
    ProjectComponent,
    NewProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
