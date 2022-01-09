import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../domain/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project1 = new Project("", "", "", "", 0, "", 0, "", "", "", 0, "");

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  sendOpinion(text: string): void{
    if(text != ''){
      (document.querySelector('.opinions') as HTMLElement).innerHTML =
        (document.querySelector('.opinions') as HTMLElement).innerHTML + '<br/>' +
        text;
    }
  }

  vote(): void{
    if(localStorage.getItem('user') == '')
      this.router.navigateByUrl('/register');
    else {
      this.project1.votesNumber = Number(this.project1.votesNumber + 1);
      localStorage.setItem('votes', this.project1.votesNumber.toString());
    }
  }


}
