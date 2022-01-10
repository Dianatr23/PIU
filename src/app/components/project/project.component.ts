import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../domain/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project1 = new Project("", "", "", "", 0, "", 0, "", "", "", 0, "", "", 0);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.project1.position = Number(localStorage.getItem('position'))!;

    if(localStorage.getItem("project" + this.project1.position.toString()) === "true") {
      const x = Number(localStorage.getItem('votes'))! + 1;
      localStorage.setItem('votes', x.toString());
    }

    this.project1.title = localStorage.getItem('title')!;
    this.project1.photo = localStorage.getItem('image')!;
    this.project1.creator = localStorage.getItem('creator')!;
    this.project1.description = localStorage.getItem('description')!;
    this.project1.budget = Number(localStorage.getItem('budget'))!;
    this.project1.category = localStorage.getItem('category')!;
    this.project1.year = Number(localStorage.getItem('year'))!;
    this.project1.meetingDate = localStorage.getItem('date')!;
    this.project1.meetingHour = localStorage.getItem('hour')!;
    this.project1.meetingDescription = localStorage.getItem('meetingDescription')!;
    this.project1.votesNumber = Number(localStorage.getItem('votes'))!;
    this.project1.zone = localStorage.getItem('zone')!;
    this.project1.status = localStorage.getItem('status')!;
  }

  openDetails(): void{
    if((document.querySelector('.detailsWindow') as HTMLElement).style.height == "0px") {
      (document.querySelector('.detailsWindow') as HTMLElement).style.height = "200px";
      setTimeout(() => {
        (document.querySelector('.detailsText') as HTMLElement).style.visibility = "visible";
      }, 1000)
    } else {
      (document.querySelector('.detailsWindow') as HTMLElement).style.height = "0px";
      (document.querySelector('.detailsText') as HTMLElement).style.visibility = "hidden";
    }
  }

  sendOpinion(text: string): void {
    if (localStorage.getItem('user') == '')
      this.router.navigateByUrl('/register');
    else {
      let zona1 = localStorage.getItem('zona1');
      let zona2 = localStorage.getItem('zona2');
      if (this.project1.zone !== zona1 && this.project1.zone !== zona2) {
        alert("Nu puteti participa in cadrul acestui proiect deoarece nu apartine zonelor de interes");
      } else {
        if (text != '') {
          if ((document.querySelector('.opinions') as HTMLElement).innerHTML === '') {
            (document.querySelector('.opinions') as HTMLElement).innerHTML =
              (document.querySelector('.opinions') as HTMLElement).innerHTML +
              localStorage.getItem('user') + ": " + text;
          } else {
            (document.querySelector('.opinions') as HTMLElement).innerHTML =
              (document.querySelector('.opinions') as HTMLElement).innerHTML +
              '<br/>' + localStorage.getItem('user') + ": " + text;
          }
        }
      }
    }
  }

  vote(): void{
    if(localStorage.getItem('user') == '')
      this.router.navigateByUrl('/register');
    else {
      if (this.project1.status === "In curs de votare") {
        let zona1 = localStorage.getItem('zona1');
        let zona2 = localStorage.getItem('zona2');
        if (this.project1.zone !== zona1 && this.project1.zone !== zona2) {
          alert("Nu puteti vota acest proiect deoarece nu apartine zonelor de interes");
        } else {
          if(localStorage.getItem("project" + this.project1.position.toString()) === "true"){
            alert("Ati votat deja o data pentru acest proiect!");
          } else {
            this.project1.votesNumber = Number(this.project1.votesNumber + 1);
            localStorage.setItem('votes', this.project1.votesNumber.toString());
            localStorage.setItem("project" + this.project1.position.toString(), "true");
          }
        }
      } else {
        alert("Acest proiect nu poate fi votat deoarece a trecut de etapa de votare");
      }
    }
  }

  meetingParticipate(): void {
    if (localStorage.getItem('user') == '')
      this.router.navigateByUrl('/register');
    else {
      if (localStorage.getItem("project" + this.project1.position.toString()) === "true") {
        this.router.navigateByUrl('/meeting');
      } else {
        alert("Aceasta intalnire nu este in desfasurare. Verificati detaliile de mai jos.");
      }
    }
  }
}
