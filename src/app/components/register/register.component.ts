import {Component, OnInit} from '@angular/core';
import {Account} from "../../domain/Account";
import {Router} from "@angular/router";
import emailRegex from "email-regex";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  zona1 = '';
  zona2 = '';
  zone = ['Baciu', 'Buna Ziua', 'Dambul Rotund', 'Europa', 'Gheorgheni', 'Grigorescu', 'Intre Lacuri', 'Manastur',
    'Marasti', 'Zorilor'];
  nume = '';
  prenume = '';
  email = '';
  telefon = '';
  parola = '';
  confirmare = '';
  notificari = false;

  emailTelefon = '';
  parolaLogin = '';
  incorrect = false;
  invalid = false;
  invalid1 = false;
  invalid2 = false;
  invalid3 = false;
  invalid4 = false;
  invalid5 = false;

  account = new Account('Trifu', 'Diana', 'diana_trifu@yahoo.com', '0723382900',
    'Marasti', 'Grigorescu', 'diana', false);

  account_admin = new Account('Dan', 'Paula', 'paula_dan@yahoo.com', '0762656780',
    'Zorilor', 'Marasti', 'paula', false);

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

  login(): void {
    if (this.emailTelefon === this.account.email || this.emailTelefon === this.account.telefon) {
      if (this.parolaLogin === this.account.parola) {
        this.router.navigateByUrl('main-page');
        localStorage.setItem('user', this.account.email);
        localStorage.setItem('telefon', this.account.telefon);
        localStorage.setItem('zona1', this.account.zona1);
        localStorage.setItem('zona2', this.account.zona2);
        localStorage.setItem('notificari', String(this.account.notificari));
        localStorage.setItem('project1', String(this.account.user.project1));
        localStorage.setItem('project2', String(this.account.user.project2));
        localStorage.setItem('project3', String(this.account.user.project3));
        localStorage.setItem('role', 'client');
      }
    } else if (this.emailTelefon === this.account_admin.email || this.emailTelefon === this.account_admin.telefon) {
      if (this.parolaLogin === this.account_admin.parola) {
        this.router.navigateByUrl('main-page');
        localStorage.setItem('user', this.account_admin.email);
        localStorage.setItem('telefon', this.account_admin.telefon);
        localStorage.setItem('zona1', this.account_admin.zona1);
        localStorage.setItem('zona2', this.account_admin.zona2);
        localStorage.setItem('notificari', String(this.account_admin.notificari));
        localStorage.setItem('role', 'admin');
      }
    }

    if (localStorage.getItem('role') === '' || localStorage.getItem('role') === null) {
      this.incorrect = true;
    }
  }

  create(): void {
    this.nume.length < 3 ? this.invalid = true : this.invalid = false;
    this.prenume.length < 3 ? this.invalid1 = true : this.invalid1 = false;
    this.zona1 === this.zona2 ? this.invalid2 = true : this.invalid2 = false;
    this.telefon.length != 10 ?this.invalid3 = true : this.invalid3 = false;
    this.parola !== this.confirmare ? this.invalid4 = true : this.invalid4 = false;
    this.invalid5 = !emailRegex().test(this.email);
  }
}
