import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/User";
import {Account} from "../../domain/Account";
import {Router} from "@angular/router";

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

  account = new Account('Trifu', 'Diana', 'diana_trifu@yahoo.com', '0723382900',
    'Marasti', 'Grigorescu', 'diana', false);

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
      }
    }
  }

}
