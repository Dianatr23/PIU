import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Project} from "../../domain/Project";

@Component({
  selector: 'app-call-page',
  templateUrl: './call-page.component.html',
  styleUrls: ['./call-page.component.scss']
})
export class CallPageComponent implements OnInit {

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

  sendOpinion(text: string): void {
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
