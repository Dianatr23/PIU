import {Component, OnInit} from '@angular/core';
import {Account} from "../../domain/Account";
import {isNull} from "@angular/compiler/src/output/output_ast";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  email: string | null = '';
  telefon: string | null = '';
  zona1: string | null = '';
  zona2: string | null = '';
  notificari: string | null = 'false';
  desfasurare = true;

  zone = ['Baciu', 'Buna Ziua', 'Dambul Rotund', 'Europa', 'Gheorgheni', 'Grigorescu', 'Intre Lacuri', 'Manastur',
    'Marasti', 'Zorilor'];
  zone1 = new Array() as Array<string>;
  zone2 = new Array() as Array<string>;

  account = new Account('Trifu', 'Diana', 'diana_trifu@yahoo.com', '0723382900',
    'Marasti', 'Grigorescu', 'diana', false);

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getSelectedZones();

    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      if (this.email != null) {
        this.account.email = this.email;
      }
    }

    if (localStorage.getItem('telefon')) {
      this.telefon = localStorage.getItem('telefon');
      if (this.telefon != null) {
        this.account.telefon = this.telefon;
      }
    }

    if (localStorage.getItem('zona1')) {
      this.zona1 = localStorage.getItem('zona1');
      if (this.zona1 != null) {
        this.account.zona1 = this.zona1;
      }
    }

    if (localStorage.getItem('zona2')) {
      this.zona2 = localStorage.getItem('zona2');
      if (this.zona2 != null) {
        this.account.zona2 = this.zona2;
      }
    }

    if (localStorage.getItem('notificari')) {
      this.notificari = localStorage.getItem('notificari');
      if (this.notificari != null) {
        if (this.notificari === 'true'){
          this.account.notificari= true;
        } else {
          this.account.notificari=false;
        }
      }
    }
  }

  selectChangeHandler1(event: any): void {
    this.zona1 = event.target.value;
  }

  selectChangeHandler2(event: any): void {
    this.zona2 = event.target.value;
  }

  editPersonalData(): void {
    localStorage.setItem('email', this.account.email);
    localStorage.setItem('telefon', this.account.telefon);
    if (this.account.notificari) {
      localStorage.setItem('notificari', 'true');
    } else {
      localStorage.setItem('notificari', 'false');
    }
    if (this.desfasurare === false) {
      localStorage.setItem('zona1', this.account.zona1);
      localStorage.setItem('zona2', this.account.zona2);
    }
  }

  getSelectedZones(): void {
    this.zone1.push(this.account.zona1);
    this.zone2.push(this.account.zona2)
    this.zone.forEach((value, index) => {
      if (value !== this.account.zona1) {
        this.zone1.push(value);
      }
      if (value !== this.account.zona2) {
        this.zone2.push(value);
      }
    });
  }

  logout(): void {
    localStorage.setItem('user', '');
    localStorage.setItem('zona1', '');
    localStorage.setItem('zona2', '');
    localStorage.setItem('email', '');
    localStorage.setItem('telefon', '');
    this.router.navigateByUrl('main-page');
  }
}
