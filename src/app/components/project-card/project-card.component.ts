import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../domain/Project";


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project1 : Project | undefined; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
