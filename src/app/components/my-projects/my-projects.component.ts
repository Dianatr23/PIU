import {Component, OnInit} from '@angular/core';
import {Account} from "../../domain/Account";
import {Router} from "@angular/router";
import emailRegex from "email-regex";

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  zona1 = '';
  zona2 = '';
  zone = ['Baciu', 'Buna Ziua', 'Dambul Rotund', 'Europa', 'Gheorgheni', 'Grigorescu', 'Intre Lacuri', 'Manastur',
    'Marasti', 'Zorilor'];
  denumire = '';
  buget = '';
  descriere = '';
  confirmare = '';
  why = '';

  invalid = false;
  invalid1 = false;
  invalid2 = false;
  invalid3 = false;

  categories = ['Agrement', 'Infrastructura', 'Amenajare spatii publice'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  selectChangeHandler1(event: any): void {
    this.zona1 = event.target.value;
  }

  selectChangeHandler2(event: any): void {
    this.zona2 = event.target.value;
  }

  create(): void {
    this.denumire.length < 6 ? this.invalid = true : this.invalid = false;
    Number(this.buget) < 9 ? this.invalid2 = true : this.invalid2 = false;
    this.descriere.length < 25 ? this.invalid1 = true : this.invalid1 = false;
    this.why.length < 30 ? this.invalid3 = true : this.invalid3 = false;
    console.log(Number(this.buget));
  }

}
