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

  loading1 = false;

  account = new Account('Trifu', 'Diana', 'diana_trifu@yahoo.com', '0723382900',
    'Marasti', 'Grigorescu', 'diana', false);

  account_admin = new Account('Dan','Paula','paula_dan@yahoo.com','0762656780','Zorilor','Marasti','paula',false);


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
    this.loading1 = true;
    setTimeout(() =>{
      this.loading1 = false;
      if (this.emailTelefon === this.account.email || this.emailTelefon === this.account.telefon) {
        if (this.parolaLogin === this.account.parola) {
          this.router.navigateByUrl('main-page');
          localStorage.setItem('user', this.account.email);
          localStorage.setItem('zona1', this.account.zona1);
          localStorage.setItem('zona2', this.account.zona2);
        }
      }
      else if(this.emailTelefon === this.account_admin.email || this.emailTelefon === this.account_admin.telefon){
        if(this.parolaLogin === this.account_admin.parola){
          this.router.navigateByUrl('main-page');
          localStorage.setItem('user',this.account_admin.email);
          localStorage.setItem('zona1', this.account.zona1);
          localStorage.setItem('zona2', this.account.zona2);
        }
      }
    },2000);
    
  }
}
